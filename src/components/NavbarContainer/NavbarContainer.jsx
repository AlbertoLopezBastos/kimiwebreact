import React from 'react';
import { Link } from 'react-scroll';

import s from  './NavbarContainer.module.css';

export default class NavbarContainer extends React.Component {

  render(){ 

    if(this.props.link) {
      return (
        <div className={s.navbar__itemContainer}>     
        <a className={s.navbar__item} href={this.props.link} target="_blank" rel="noopener noreferrer">        
          {this.props.item}   
        </a> 
        {this.props.children}
        </div>
      )
    }

    return (
      <div className={s.navbar__itemContainer}>     
          <Link className={s.navbar__item} 
                activeClass="active"
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={700} 
                onSetActive={this.handleSetActive} 
                to={this.props.id}
          >        
            {this.props.item}   
          </Link>
   
        {this.props.children}
      </div>
    )
  }
}
