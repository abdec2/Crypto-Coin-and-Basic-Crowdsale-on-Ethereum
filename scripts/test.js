
const { ethers } = require("ethereum-waffle/node_modules/ethers");
const hre = require("hardhat");

async function main() {
  const AABToken = await hre.ethers.getContractFactory("AABToken");
  const AAB = await AABToken.attach('0xa513E6E4b8f2a923D98304ec87F64353C4D5C853');
    const balance = await AAB.balanceOf('0xa0Ee7A142d267C1f36714E4a8F75612F20a79720');
  console.log(balance.toString());


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
