require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: process.env.INFURA_GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 40000
  },
}