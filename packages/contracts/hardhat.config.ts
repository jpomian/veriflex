import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

import { HARDHAT_CHAINID, TIMEOUT, PRIVATE_KEY, SEPOLIA_URL_API } from "./config";
import { getMnemonic } from "./lib/dev/mnemonic";
import { getNetworksUserConfigs } from "./lib/dev/network";

dotenv.config();

const mnemonic = getMnemonic("../../mnemonic.txt");
const networksUserConfigs = getNetworksUserConfigs(mnemonic);

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: HARDHAT_CHAINID,
      accounts: {
        mnemonic,
      },
    },
    sepolia: {
      url: SEPOLIA_URL_API,
      chainId: 11155111,
      accounts: [PRIVATE_KEY],
    },
    ...networksUserConfigs,
  },
  mocha: {
    timeout: TIMEOUT,
  },
};

export default config;
