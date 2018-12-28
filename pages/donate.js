import React from 'react'
import Head from 'next/head'
import DonateForm from '../components/DonateForm.js';
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <h2>Donate</h2>
      <p>Use the form below to donate to my Ethereum wallet.</p>
      <DonateForm></DonateForm>
    </div>
  </Layout>
)
