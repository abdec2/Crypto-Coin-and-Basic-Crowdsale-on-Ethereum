
const { ethers } = require("ethereum-waffle/node_modules/ethers");
const hre = require("hardhat");

async function main() {
  const AABToken = await hre.ethers.getContractFactory("AABToken");
  const AABTCS = await hre.ethers.getContractFactory("AABTCrowdsale");
  const AAB = await AABToken.deploy(ethers.utils.parseEther('1000000'));
  
  await AAB.deployed();
  
  const Crowdsale = await AABTCS.deploy(1, "0x90f79bf6eb2c4f870365e785982e1f101e93b906", AAB.address);
  await Crowdsale.deployed();

  await AAB.transfer(Crowdsale.address, ethers.utils.parseEther('5000').toString());

  console.log("AAB Token deployed to:", AAB.address);
  console.log("AAB Crowdsale deployed to:", Crowdsale.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
