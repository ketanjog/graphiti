pragma solidity >=0.6.0 <0.8.0;

/// @dev A template contract to handle AI Image service requests 
contract GraphitiFactory {
    
    /// @dev Basic struct that holds a record of request being places
    /// @param serviceType currently only "upscale"
    /// @param status either Queued, Complete, or Aborted
    struct Graphiti {
        string serviceType;
        string status;
    }

    ///@dev Job notification sent to all listening phaestus nodes.
    event jobAvailable(string _serviceType);

    /// @dev stores a list of all graphiti requests
    Graphiti[] public graphitis;

    /// @dev Notes the owner of the request. Will approve erc721 token for this user later.
    mapping (uint => address) public graphitiToOwner;
    
    /// @dev logs request, sends to phaestus nodes and returns completion response
    /// @param _serviceType currently set to "upscale"
    function _createGraphiti(string memory _serviceType) internal {

        /// Log request on chain.
       graphitis.push(Graphiti(_serviceType, "Queued"));
       uint id = graphitis.length -1;
       graphitiToOwner[id] = msg.sender;
        
        /// Emits event saying job of _serviceType is available
        emit jobAvailable(_serviceType);

        //bool response = _accessPhaestus(graphitis[id]);
        
    }
}
