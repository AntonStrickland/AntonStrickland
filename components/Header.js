import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {

  return (
    <Menu style={{marginTop: '10px'}}>

      <Link route="/"><a className="item">Anton Strickland</a></Link>

      <Menu.Menu position="right">

        <Link route="/"><a className="item">Resume</a></Link>
        <Link route="/"><a className="item">Services</a></Link>
        <Link route="/contact"><a className="item">Contact</a></Link>

      </Menu.Menu>
    </Menu>
  );
}
