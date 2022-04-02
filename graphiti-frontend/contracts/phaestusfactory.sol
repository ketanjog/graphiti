pragma solidity >=0.6.0 <0.8.0;

/// @dev A template contract to manage phaestus nodes.

contract PhaestusFactory{

    ///Modifier to verify identity of owner:
    modifier onlyOwnerOf(uint _nodeId) {
        require(msg.sender == phaestusNodes[_nodeId].nodeOwnerAddress);
        _;
  }

    /// @dev Node struct. currently only handles upscaling. 
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


}
