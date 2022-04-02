pragma solidity >=0.6.0 <0.8.16;

/// @dev A template contract to handle AI Image service requests 
contract GraphitiFactory {

    ///Modifier to verify identity of client:
        modifier onlyIssuer(uint _graphitiId) {
            require(msg.sender == graphitiToOwner[_graphitiId]);
            _;
    }
    /// @dev Basic struct that holds a record of request being places
    /// @param serviceType currently only "upscale"
    /// @param status either unclaimed, processing, complete, aborted or failed.
    struct Graphiti {
        string serviceType;
        string status;
        string url;
    }

    ///@dev Job notification sent to all listening phaestus nodes.
    event graphitiAvailable(string _serviceType, uint _graphitiId);

    /// @dev stores a list of all graphiti requests
    Graphiti[] public graphitis;

    /// @dev Notes the owner of the request. Will approve erc721 token for this user later.
    mapping (uint => address) public graphitiToOwner;
    mapping (uint => uint) public graphitiToPhaestus;
    
    /// @dev logs request, sends to phaestus nodes and returns completion response
    /// @param _serviceType currently set to "upscale"
    function createGraphiti(string memory _serviceType, string memory _url) public {

        /// Log request on chain.
       graphitis.push(Graphiti(_serviceType, "unclaimed", _url));
       uint _graphitiId = graphitis.length -1;
       graphitiToOwner[_graphitiId] = msg.sender;
        
        /// Emits event saying job of _serviceType is available
        emit graphitiAvailable(_serviceType, _graphitiId);
        
    }

    function viewGraphitis() public view returns (Graphiti[] memory) {
        return graphitis;
    }


}
