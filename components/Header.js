import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../server/routes';

export default () => {

  return (
    <Menu style={{marginTop: '10px'}}>

      <Link route="/"><a className="item">Anton Strickland</a></Link>

      <Menu.Menu position="right">
        <Link route="https://drive.google.com/file/d/1gKNzpDTSxXLuVB4H1jdjpQlVzceXKP6K/view?usp=sharing"><a className="item">Resume</a></Link>
        <Link route="/projects"><a className="item">Projects</a></Link>
        <Link route="/services"><a className="item">Services</a></Link>
        <Link route="/contact"><a className="item">Contact</a></Link>
        <Link route="/donate"><a className="item">Donate</a></Link>
      </Menu.Menu>
    </Menu>
  );
}
