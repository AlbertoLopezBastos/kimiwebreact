import React from 'react';
import { Link } from 'react-scroll';

export default class NavbarContainer extends React.Component {

  render(){ 

    if(this.props.link) {
      return (
        <div className="navbar__item-container">     
        <a className="navbar__item" href={this.props.link} target="_blank" rel="noopener noreferrer">        
          {this.props.item}   
        </a> 
        {this.props.children}
        </div>
      )
    }

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
