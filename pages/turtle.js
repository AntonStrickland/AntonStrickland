import React from 'react'
import Head from 'next/head'
import TurtleForm from '../components/TurtleForm.js';
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <h2>Donate with TurtleCoin</h2>
      <TurtleForm></TurtleForm>
    </div>
  </Layout>
)
