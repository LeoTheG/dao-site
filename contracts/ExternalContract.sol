pragma solidity ^0.8.2;

// import console.log
import "hardhat/console.sol";

contract ExternalContract {
    function externalCall() external pure returns (string memory) {
        return "external call";
    }

    function publicCall(
        string memory testVal
    ) public pure returns (string memory) {
        console.log(testVal);
        return "public call";
    }

    function internalCall() internal pure returns (string memory) {
        return "internal call";
    }

    function privateCall() private pure returns (string memory) {
        return "private call";
    }
}
