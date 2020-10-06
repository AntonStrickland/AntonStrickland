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
            Official website for Goldbar Games. Most recent version (2020) built with Python, Django, AWS, hosted on Heroku. Includes user accounts, comment system, payment processing, and much more. The previous version (2014-2019) was hosted on GitHub Pages and used Ruby and Jekyll. Also at one point maintained a server that used PHP and MySQL (LAMP).
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
             <Button basic color='red' href="https://github.com/GoldbarGames/Game-Engine">
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
             src='static/images/projects/gg.jpg'
           />
           <Card.Header>New Website</Card.Header>
           <Card.Meta>Goldbar Games</Card.Meta>
           <Card.Description> New website for Goldbar Games built with Python Django, includes a blog, user registration, and payment processing with Stripe. Hosted on Heroku.</Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://goldbargamestest.herokuapp.com">
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
             src='static/images/projects/madco.jpg'
           />
           <Card.Header>Vendor Bids Portal</Card.Header>
           <Card.Meta>Madison County, Illinois</Card.Meta>
           <Card.Description> A C# web application that lets vendors do business with the county.</Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://apps.co.madison.il.us/adminservices/vendors/">
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
             src='static/images/projects/madco.jpg'
           />
           <Card.Header>Vote By Mail</Card.Header>
           <Card.Meta>Madison County, Illinois</Card.Meta>
           <Card.Description> A C# web application that lets voters register to vote by mail.</Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green' href="https://apps.co.madison.il.us/CountyClerk/Elections/VoteByMail/">
               View Website
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
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' href="https://github.com/AntonStrickland/AntonStrickland">
                Source Code
              </Button>
            </div>
          </Card.Content>
        </Card>

   </Card.Group>

    </div>
  </Layout>
)
