require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks:  {
    ropsten:  {
      url:'https://eth-ropsten.alchemyapi.io/v2/xe9oZawLjH92MGASwtpBl2s14N9G5CUA',
      accounts:['79111f9edc503e382f1870a51e7b31123182ec4056ff8d1ea54302108f47c93e']
    }
  }
};
