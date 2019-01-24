import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <h1>Welcome!</h1>
      <p>This website is a constant work in progress. Please check back for updates!</p>
      <h2>About Me</h2>
      <p>My name is Anton Strickland. I graduated with a Bachelor's in Computer Science from Missouri S&T in 2016, and have been pursuing my dream career of indie game development ever since. I also do freelance coding, and lately I've been interested in emerging blockchain technologies like smart contracts. I'm always interested in learning new things and applying my skills to make the world a better place.</p>
      <p>Here you can find a portfolio of my programming work. Please let me know if you are interested in working together.</p>
      <p>Also, you can catch me streaming my game development on <a href='https://twitch.tv/goldbargames'>Twitch</a> Monday through Friday from 8 PM to 10 PM CST.</p>
    </div>
  </Layout>
)
