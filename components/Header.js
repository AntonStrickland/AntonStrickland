import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../server/routes';

export default () => {

  return (
    <Menu style={{marginTop: '10px'}}>

      <Link route="/"><a className="item">Anton Strickland</a></Link>

      <Menu.Menu position="right">
        <Link route="https://drive.google.com/file/d/19WQfbH5p9zqsYLoNuD-X14JSE642sSpK"><a className="item">Resume</a></Link>
        <Link route="/projects"><a className="item">Projects</a></Link>
        <Link route="/services"><a className="item">Services</a></Link>
        <Link route="/contact"><a className="item">Contact</a></Link>
        <Link route="/donate"><a className="item">Donate</a></Link>
        <Link route="/turtle"><a className="item">TurtlePay</a></Link>
      </Menu.Menu>
    </Menu>
  );
}
