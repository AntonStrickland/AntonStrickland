import React from 'react'
import Head from 'next/head'
import DonateForm from '../components/DonateForm.js';
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <h2>Donate</h2>
      <p>Use the form below to donate to my Ethereum wallet via <a href="https://github.com/AntonStrickland/DonateContract">my smart contract.</a></p>
      <DonateForm></DonateForm>
      <hr/>
      <h2>How to Donate</h2>
      <h3>Install MetaMask</h3>
      <p><a href="https://metamask.io/">MetaMask</a> is an extension for the Firefox, Chrome, and Brave browsers that allows anyone to easily interact with Ethereum-based smart contracts through the web. You will need to install it on your browser and set up your wallet before you can send me any donations.</p>
      <h3>Buy Ethereum</h3>
      <p>Ethereum can be purchased through many exchanges, the most popular being Coinbase. Open MetaMask and click 'buy' to select an exchange and purchase some ether. If you attempt a transaction without having enough ether, MetaMask should automatically ask if you want to buy more.</p>
      <h3>Submit the Form</h3>
      <p>Just specify how much you'd like to donate (in ether) and press the button. MetaMask should open a window asking you to confirm the transaction. Please note that it may take up to a minute for the transfer to finish processing. Thank you!</p>
      <hr/>
    </div>
  </Layout>
)
