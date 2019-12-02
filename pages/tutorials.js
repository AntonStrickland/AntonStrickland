import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout.js';
import TutorialAccordion from '../components/TutorialAccordion.js';

export default () => (
  <Layout>
    <div>
      <h1>C++ Tutorial Series</h1>

      <TutorialAccordion></TutorialAccordion>

    </div>
  </Layout>
)
