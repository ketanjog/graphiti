pragma solidity >=0.6.0 <0.8.0;

import "./graphitifactory.sol";
//import "./phaestusfactory.sol";

contract GraphitiGetter is GraphitiFactory {

    function fetchGraphiti(uint _graphitiId) external view onlyIssuer(_graphitiId) returns (string memory) {
        if (keccak256(abi.encodePacked(graphitis[_graphitiId].status)) == keccak256(abi.encodePacked("aborted"))) {
            return "aborted";
        } else if (keccak256(abi.encodePacked(graphitis[_graphitiId].status)) == keccak256(abi.encodePacked("failed"))) {
            return "failed";
        } else if (keccak256(abi.encodePacked(graphitis[_graphitiId].status)) == keccak256(abi.encodePacked("completed"))) {
            return "completed";
        } else {
            return "unclaimed or in process";
        }
    }

}
