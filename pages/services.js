import React from 'react'
import Head from 'next/head'
import DonateForm from '../components/DonateForm.js';
import Layout from '../components/Layout.js';
import { Card } from 'semantic-ui-react';

export default () => (
  <Layout>
    <div>
      <h1>Services</h1>

      <h2>Current Status: OPEN</h2>

      <p>Please contact for exact pricing. Before work begins we will discuss your needs and have the specific requirements and payment amount in writing. If you are looking for something that does not fit these exact descriptions, I would be happy to discuss it and reach an agreement. Payment will be 50% upfront, 50% at the end.</p>
	  
	  
	<h3>Website Packages</h3>
	  
	  <Card.Group>  
	  
      <Card
        href='#'
        header='Simple Website'
        description='Best for a website with a handful of pages that do not require any user interaction, such as a landing page to advertise a small business. Includes a homepage, an about page, a contact page, links to social media, and responsive design for mobile devices.'
      />  
	  
      <Card
        href='#'
        header='Landing Page'
        description='Landing pages are one-page websites designed to persuade the user to perform some action, usually buying your product. I will develop a landing page tailored specifically to your product.'
      />  		  
	  
      <Card
        href='#'
        header='Blog Website'
        description='Best for a website that regularly posts new content. Includes everything in the Simple Website package, plus a CMS (content management system) dashboard to insert, update, and delete blog posts.'
      />
	  
      <Card
        href='#'
        header='Online Storefront'
        description='Do you have one or more products you want to sell online? I will develop a storefront with custom styling and work with you to set up pages for up to 20 products.'
      />
	 
	  
      <Card
        href='#'
        header='Image Gallery'
        description='A web page showing a set (or multiple sets) of pictures, arranged in a gallery format.'
      />
	 
	  
      <Card
        href='#'
        header='Mailing List'
        description='Mailing lists are a great way to keep your customers coming back. Inform them of upcoming sales and new items, or remind them to finish a purchase. I will add a mailing list sign-up form to your website and help you customize your mail campaign.'
      />		  
	  
	  </Card.Group>	  
	  
	  
	<h3>Game Development</h3>
	  
	  <Card.Group>
	  
	  
      <Card
        href='#'
        header='Starter GUI in Unity'
        description='A simple boilerplate GUI for your game: title screen, credits screen, saving/loading, pause menu, settings menu, translations. The player can adjust music/sound volume, screen resolution, window mode, toggle vsync, language, etc. in the settings. Can create new savedata or load from the title screen. Can go from the title screen to the first level of the game.'
      />
	  
      <Card
        href='#'
        header='Prototype in Unity'
        description='A simple prototype of your game idea implemented in the Unity game engine. I will use placeholder art and sound, unless you provide me with something else. Deliverables include the executable file and source code.'
      />	  
	  
      <Card
        href='#'
        header='Single-Screen Unity Game'
        description='A game that takes place all on a single screen (like games such as Tetris, Flappy Bird, or Pac-Man). Includes title screen, pause screen, and settings screen. If new levels require custom design, the first level is free. Can be for PC or Android, but not both. Deliverables include the executable file and source code. You must provide me with the art and sound and must manage your own store pages.'
      />
	  
	  </Card.Group>
	  
	  <h3>Writing</h3>
	  
	  <Card.Group>
	  
      <Card
        href='#'
        header='Copywriting / Proofreading'
        meta=''
        description='Are you trying to sell a product or service? Having trouble deciding what to say? I will write it for you or improve an existing piece.'
      />
	  
      <Card
        href='#'
        header='Transcription'
        meta=''
        description='I will write a transcript of an English-speaking audio file.'
      />	  

      <Card
        href='#'
        header='Short Story'
        meta=''
        description='I will write a story for you. You can provide a prompt or leave it up to me to decide.'
      />
	 

      <Card
        href='#'
        header='Proofreading'
        meta=''
        description='I will proofread your writing, meaning I will make suggestions for any mistakes involving spelling, grammar, syntax, or word choice that I find while reading your text.'
      />

      <Card
        href='#'
        header='Storyboarding'
        meta=''
        description='I will work with you to create a solid outline for your story, organizing it into acts and scenes.'
      />
	  
      <Card
        href='#'
        header='Character Creation'
        meta=''
        description='I will work with you to create a complete character for your story: their personality, backstory, appearance, and story arc.'
      />
	  
	  </Card.Group>
	  
	<h3>Other</h3>
	
	<Card.Group>
	
      <Card
        href='#'
        header='Online Tutoring'
        description='I am offering tutoring services for students both young and old. Subjects include high-school level English, math, and science, and college level computer science. I am willing to teach programming languages including C++, C#, Python, and Javascript, and game development in the Unity game engine.'
      />
	  
      <Card
        href='#'
        header='Software Consulting'
        description='I will get to know your business software needs and provide solutions. We will work together to develop a plan of action for your business and I will lead you to success every step of the way.'
      />
	
	
	</Card.Group>

    </div>
  </Layout>
)
