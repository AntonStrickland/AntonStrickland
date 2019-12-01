import React from 'react'
import Head from 'next/head'
import ProjectTable from '../components/ProjectTable.js';
import Layout from '../components/Layout.js';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Card, Button, Image } from 'semantic-ui-react';

export default () => (
  <Layout>
    <div>
      <h2>Projects</h2>
      <p>Below is a selection of projects I have worked on. Check out my <a href='https://github.com/AntonStrickland'>GitHub</a> for many more projects and open-source contributions.</p>

      <Card.Group>



       <Card>
         <Card.Content>
           <Image
             floated='right'
             size='small'
             src='static/images/projects/butler1.jpg'
           />
           <Card.Header>Detective Butler</Card.Header>
           <Card.Meta>Goldbar Games</Card.Meta>
           <Card.Description>
             Wrote the story and programmed the game using the open-source game engine ONScripter (C++). For the Steam release, I modified the engine to use OpenGL.
          </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://store.steampowered.com/app/612620/Detective_Butler_Maiden_Voyage_Murder/">
               Store Page
             </Button>
             <Button basic color='red' href="https://github.com/GoldbarGames/ONScripter-EN-Steam">
               Source Code
             </Button>
           </div>
         </Card.Content>
       </Card>

       <Card>
         <Card.Content>
           <Image
             floated='right'
             size='small'
             src='static/images/projects/sb1.jpg'
           />
           <Card.Header>Snowball Saves Christmas</Card.Header>
           <Card.Meta>Goldbar Games</Card.Meta>
           <Card.Description>
             Created the game in Unity using C#. Released for Android on Google Play and Amazon Kindle. Integrated Unity Ads, Unity Analytics, and In-App Purchases.
          </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://play.google.com/store/apps/details?id=com.GoldbarGames.SnowballSavesChristmas">
               Store Page
             </Button>
           </div>
         </Card.Content>
       </Card>

       <Card>
         <Card.Content>
           <Image
             floated='right'
             size='small'
             src='static/images/projects/sb2.jpg'
           />
           <Card.Header>Snowball Saves Summer</Card.Header>
           <Card.Meta>Goldbar Games</Card.Meta>
           <Card.Description>
             Created the game in Unity using C#. Released on Steam for PC, Mac, and Linux. Livestreamed its development on Twitch. Had it translated into Turkish, German, Brazilian Portuguese, and Chinese.
          </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://store.steampowered.com/app/839130/Snowball_Saves_Summer/">
               Store Page
             </Button>
           </div>
         </Card.Content>
       </Card>

       <Card>
         <Card.Content>
           <Image
             floated='right'
             size='small'
             src='static/images/projects/gg.jpg'
           />
           <Card.Header>Goldbar Games Website</Card.Header>
           <Card.Meta>Goldbar Games</Card.Meta>
           <Card.Description>
            Official website for Goldbar Games. Hosted on GitHub Pages using Ruby and Jekyll. Previously maintained a server that used PHP and MySQL (LAMP).
          </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://goldbargames.com/">
               View Website
             </Button>
           </div>
         </Card.Content>
       </Card>

       <Card>
         <Card.Content>
           <Image
             floated='right'
             size='small'
             src='static/images/projects/gg.jpg'
           />
           <Card.Header>Goldbar Games Store</Card.Header>
           <Card.Meta>Goldbar Games</Card.Meta>
           <Card.Description>
            Official merchandise store for Goldbar Games. Created with Shopify.
          </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://store.goldbargames.com/">
               View Website
             </Button>
           </div>
         </Card.Content>
       </Card>

       <Card>
         <Card.Content>
           <Image
             floated='right'
             size='small'
             src='static/images/projects/gg.jpg'
           />
           <Card.Header>C++ Game Engine</Card.Header>
           <Card.Meta>Goldbar Games</Card.Meta>
           <Card.Description> Currently developing a game engine in C++ using SDL and OpenGL. Livestreams development on Twitch.</Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://twitch.tv/goldbargames">
               View Stream
             </Button>
           </div>
         </Card.Content>
       </Card>


        <Card>
          <Card.Content>
            <Card.Header>My Portfolio Website</Card.Header>
            <Card.Meta>Anton Strickland</Card.Meta>
            <Card.Description>This website you are currently on was made using Javascript technologies including Node, React, Next, Express, and Web3. The CSS is from Semantic-UI. Currently hosted using Heroku.</Card.Description>
          </Card.Content>
        </Card>

   </Card.Group>

    </div>
  </Layout>
)
