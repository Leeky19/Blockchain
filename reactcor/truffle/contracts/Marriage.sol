pragma solidity ^0.8.0;

contract Marriage {
    address public spouse1;
    address public spouse2;
    bool public married;

    constructor(address _spouse1, address _spouse2) {
        spouse1 = _spouse1;
        spouse2 = _spouse2;
        married = false;
    }

    function marry() external {
        require(msg.sender == spouse1 || msg.sender == spouse2, "Only spouses can call this function");
        require(!married, "Already married");
        married = true;
    }

    function divorce() external {
        require(msg.sender == spouse1 || msg.sender == spouse2, "Only spouses can call this function");
        require(married, "Not married");
        married = false;
    }
}
