// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const name = "Tether";
  const symbol = "USDT";
  const decimals = 6;
  const ownerAddress = deployer.address; // Replace with a different owner if desired

  const TestnetERC20 = await hre.ethers.getContractFactory("TestnetERC20");
  const testnetERC20 = await TestnetERC20.deploy(name, symbol, decimals, ownerAddress);
  const deployment = await testnetERC20.waitForDeployment()
  const address = await deployment.getAddress()
  console.log(address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
