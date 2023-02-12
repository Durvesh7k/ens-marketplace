require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const QUICKNODE_API_KEY = process.env.REACT_APP_QUICKNODE_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://magical-floral-rain.ethereum-goerli.discover.quiknode.pro/${QUICKNODE_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
