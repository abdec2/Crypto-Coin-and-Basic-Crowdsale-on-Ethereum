// SPDX-license-identifier: UNLICENSED
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";

contract AABTCrowdsale is Crowdsale {

    constructor(uint256 _rate, address payable _wallet, IERC20 _token) 
        Crowdsale(_rate, _wallet, _token)
        public 
    {

    }

}