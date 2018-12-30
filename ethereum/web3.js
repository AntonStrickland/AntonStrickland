import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and MetaMask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not running MetaMask
  console.log("ENV TEST");
  console.log(process.env.DONATE_ADDRESS);
  const provider = new Web3.providers.HttpProvider(
    process.env.INFURA_RINKEBY
  );
  web3 = new Web3(provider);
}

export default web3;
