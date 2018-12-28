import web3 from "./web3.js";

import Donate from './build/Donate.json';

const instance = new web3.eth.Contract(
  JSON.parse(Donate.interface),
  process.env.DONATE_ADDR
);

export default instance;
