import React from 'react'
import Head from 'next/head'
import DonateForm from '../components/DonateForm.js';
import Layout from '../components/Layout.js';
import { Card } from 'semantic-ui-react';

export default () => (
  <Layout>
    <div>
      <h1>Services</h1>

      <h2>Current Status: CLOSED</h2>

      <p>When being commissioned for freelance work, rates will be based on the type and length of each project.</p>

      <Card.Group>

      <Card
        href='#'
        header='Video Games'
        meta=''
        description='More than five years of Unity3D C# experience. Has released on PC, Mac, Linux, and Android. Includes Unity ads and analytics, in-app purchases, and Steam achievements and leaderboards.'
      />

      <Card
        href='#'
        header='Websites'
        meta=''
        description='Full-stack website creation, maintenance, and design. Includes domain names, hosting, database management, and eCommerce such as PayPal integration and Shopify store creation and maintenance.'
      />

      <Card
        href='#'
        header='Blockchain'
        meta=''
        description='Cryptocurrencies, tokens, smart contracts, and decentralized apps on the Ethereum blockchain.'
      />

      <Card
        href='#'
        header='Extensions'
        meta=''
        description='Extensions for Twitch streamers.'
      />

      <Card
        href='#'
        header='Mobile Apps'
        meta=''
        description='Android applications (iOS coming soon).'
      />

      <Card
        href='#'
        header='Bots'
        meta=''
        description='Bots for Discord, Twitch, or just chatting.'
      />

      <Card
        href='#'
        header='Data Science'
        meta=''
        description='Data collection and quantitative analysis.'
      />

      <Card
        href='#'
        header='Artificial Intelligence'
        meta=''
        description='Machine learning, neural networks, evolutionary algorithms, A* pathfinding, minimax adversarial search.'
      />

      <Card
        href='#'
        header='Other'
        meta=''
        description='General expert knowledge of C++, C#, Javascript, and Python for any project.'
      />

      </Card.Group>

    </div>
  </Layout>
)
