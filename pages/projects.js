import React from 'react'
import Head from 'next/head'
import ProjectTable from '../components/ProjectTable.js';
import Layout from '../components/Layout.js';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default () => (
  <Layout>
    <div>
      <h2>Projects</h2>
      <p>Check out my <a href='https://github.com/AntonStrickland'>GitHub</a> for many more projects and open-source contributions.</p>
      <ProjectTable></ProjectTable>

    </div>
  </Layout>
)
