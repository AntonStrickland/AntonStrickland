import web3 from "./web3.js";

import Donate from './build/Donate.json';

const instance = new web3.eth.Contract(
  JSON.parse(Donate.interface),
  '0x239d0a4031b0a8fac2f7be01b278a776a54df8fd'
);

export default instance;
