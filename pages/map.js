import React from 'react'
import Head from 'next/head'
import MapComponent from '../components/MapComponent.js';
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <MapComponent></MapComponent>
    </div>
  </Layout>
)
