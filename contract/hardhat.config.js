//https://eth-ropsten.alchemyapi.io/v2/Yr8j4zL-GR0jT1y1lmv3wYa6HnrbYO10
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Yr8j4zL-GR0jT1y1lmv3wYa6HnrbYO10',
      accounts: ['4bfd23cc629c1b2853390740cee8d4ef7049cdc28c8d0a2edfa9a66f605c79b7'],
    },
  },
};