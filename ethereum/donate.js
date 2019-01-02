import web3 from "./web3.js";

import Donate from './build/Donate.json';

const instance = new web3.eth.Contract(
  JSON.parse(Donate.interface),
  '0xC519cFc62B6E2cACB15A49D195f697d7145F1EB3'
);

export default instance;
