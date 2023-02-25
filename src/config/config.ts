// The address's below provided only for testing purposes
// In production such address's should be placed to environment variable file (.env)
// Like this:
// const nodeAddress: string = process.env.ETHEREUM_NODE_URL || '';
// const walletAddress: string = process.env.TEST_WALLET_ADDRESS || '';

import Web3 from 'web3';


const ETHEREUM_NODE_URL: string = 'https://mainnet.infura.io/v3/378aaacfe1ef4906ace7f9b9c50bfcbb';

export const FIRST_TEST_WALLET_ADDRESS: string = '0xA145ac099E3d2e9781C9c848249E2e6b256b030D';

// Additional whale wallet address for testing purposes - 0xbe0eb53f46cd790cd13851d5eff43d12404d33e8
// Found at https://etherscan.io/address/0xbe0eb53f46cd790cd13851d5eff43d12404d33e8 (Public name: Binance)
export const SECOND_TEST_WALLET_ADDRESS: string = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8'

export const tokenSource = 'https://www.coingecko.com/en/api/documentation';

const web3Provider = new Web3.providers.HttpProvider(ETHEREUM_NODE_URL);
export const web3 = new Web3(web3Provider);

// Just to make sure the connection and provider work correctly
web3.eth.getBlockNumber().then((result) => {
  console.log('Latest Ethereum Block is', result);
});

export const walletDirName: string = 'public';
export const walletFileName: string = 'wallet-balance.json';
export const whaleWalletFileName: string = 'whale-wallet-balance.json';

export const balanceOfAbi = [
  {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
  },
];

// const balance = await web3.eth.getBalance(FIRST_TEST_WALLET_ADDRESS);

// const properBalanceView = web3.utils.fromWei(
//   web3.utils.toBN(balance),
//   'ether'
// );

// console.log(properBalanceView);



// const ethereum = '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae';

// const contract = new web3.eth.Contract(balanceOfAbi as AbiItem[], ethereum);
// const getBalance = async () => {
//   const res = await contract.methods.balanceOf(FIRST_TEST_WALLET_ADDRESS).call();
//   const format = web3.utils.fromWei(
//     web3.utils.toBN(res),
//     'ether'
//   );
//   console.log(format);
// };

// getBalance();
// try {
//   const tokenBalance = contract.methods.balanceOf(FIRST_TEST_WALLET_ADDRESS).call().then(console.log);
// } catch(err) {
//   console.log(err);
// }

