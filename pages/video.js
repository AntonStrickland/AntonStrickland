import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <video controls width="550" height="320">
        <source src="static/videos/WDK.mp4" type="video/mp4" />
      </video>
    </div>
  </Layout>
)
