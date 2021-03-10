import React from 'react';
import { Link } from 'react-scroll';

export default class NavbarContainer extends React.Component {

  render(){ 
    return (
      <div className="navbar__item-container">     
          <Link className="navbar__item" 
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
