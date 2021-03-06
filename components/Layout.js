import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

import Header from './Header.js';
import Footer from './Footer.js';

export default (props) => {

  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
        <link rel="stylesheet" href="https://js.arcgis.com/4.10/esri/css/main.css" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
}
