pragma solidity >=0.6.0 <0.8.15;

import "./graphitifactory.sol";

/// @dev A template contract to manage phaestus nodes.

contract PhaestusFactory is GraphitiFactory{

  ///Modifier to verify identity of owner:
    modifier onlyOwnerOf(uint _nodeId) {
        require(msg.sender == phaestusNodes[_nodeId].nodeOwnerAddress);
        _;
  }
    

    /// @dev Node struct. currently only handles upscaling. 
    /// @param status takes active, inactive and engaged.
    struct PhaestusNode{
        address nodeOwnerAddress;
        string serviceType;
        uint jobsCompleted;
        uint jobsFailed;
        string status;
    }
    
    /// Record of all phaestus nodes:
    PhaestusNode[] public phaestusNodes;

    /// @dev add authentication to check node validity
    function createNode(address _owner, string memory _serviceType) public returns (uint){
        phaestusNodes.push(PhaestusNode(_owner, _serviceType, 0,0, "inactive"));
        uint nodeId = phaestusNodes.length;
        return nodeId;
    }
    function updateStatusActive(uint _nodeId) public onlyOwnerOf(_nodeId) {
        phaestusNodes[_nodeId].status = "active";
    }
    /// Once the node hears a jobAvailable event, and if they have the required servicetype, claim the job
    function claimJob(uint _nodeId, uint _graphitiId) public onlyOwnerOf(_nodeId) returns (string memory ) {
        require(keccak256(abi.encodePacked(graphitis[_graphitiId].status)) == keccak256(abi.encodePacked("unclaimed")));
        graphitiToPhaestus[_graphitiId] = _nodeId;
        phaestusNodes[_nodeId].status = "engaged";
        graphitis[_graphitiId].status = "claimed";

        return graphitis[_graphitiId].url;
    }

}

