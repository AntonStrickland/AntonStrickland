import React from 'react'
import Head from 'next/head'
import ContactForm from '../components/ContactForm.js';
import Layout from '../components/Layout.js';

export default () => (
  <Layout>
    <div>
      <h2>Contact</h2>
      <p>For business inquiries, please fill out the contact form below:</p>
      <ContactForm></ContactForm>
    </div>
  </Layout>
)
