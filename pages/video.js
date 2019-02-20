import React from 'react'
import Head from 'next/head'
import AdminForm from '../components/AdminForm.js';
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <video controls width="550" height="320">
        <source src="C:/Users/Anton/Documents/GitHub/as2/pages/WDK.mp4" type="video/mp4" />
      </video>
    </div>
  </Layout>
)

//<Player
//  playsInline
//  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
///>
