import web3 from "./web3.js";

import Donate from './build/Donate.json';

const instance = new web3.eth.Contract(
  JSON.parse(Donate.interface),
  '0x4Df0CaCD30ba7E7D49e54A54Df386Ee1D9D40808'
);

export default instance;
