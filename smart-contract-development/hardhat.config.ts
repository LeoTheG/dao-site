import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      // needed to prevent error "Contract code size is <> bytes and exceeds 24576 bytes"
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

export default config;
