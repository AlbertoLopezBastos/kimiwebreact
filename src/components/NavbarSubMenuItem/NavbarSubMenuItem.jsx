import React from 'react';
import { Link } from 'react-scroll';


const NavbarSubMenuItem = (props) => {
  
    return (
      <li>
          <Link activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-300} 
                duration={700} 
                onSetActive={props.handleSetActive} 
                to={props.id}
          >
            {props.value}
          </Link>
      </li>
    )  
}

export default NavbarSubMenuItem;
