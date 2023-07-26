const { ethers, upgrades } = require("hardhat");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // deploy
  const TBP = await hre.ethers.getContractFactory("PersonGovernanceVoting");
  const tbp = await TBP.deploy("1690175243", "1695532043", "https://raw.githubusercontent.com/App-Voting/Bau-Cu-Voting/main/blockchain");
  await tbp.deployed();
  console.log("tbp deployed to:", tbp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
