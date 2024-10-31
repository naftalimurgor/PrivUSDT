import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    bnbTestNet: {
      url: 'https://bsc-testnet.blockpi.network/v1/rpc/public',
      // @ts-ignore
      accounts: [process.env.PRIV_KEY]
    }
  }
};

export default config;
