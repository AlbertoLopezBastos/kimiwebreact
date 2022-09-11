import React from 'react';
import { Link } from 'react-scroll';

import s from  './NavbarContainer.module.css';

const NavbarContainer = (props) => {

    if(props.link) {
      return (
        <div className={s.itemContainer}>     

        <a className={s.item} href={props.link} target="_blank" rel="noopener noreferrer">        
          {props.item}   
        </a> 
        
        {props.children}
        </div>
      )
    }    

    return (
      <div className={s.itemContainer}>     
          <Link className={s.item} 
                activeClass="active"
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={700} 
                onSetActive={props.handleSetActive} 
                to={props.id}
          >        
            {props.item}   
          </Link>
   
        {props.children}
      </div>
    )
}

export default NavbarContainer;
