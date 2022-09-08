import React from 'react';
import { Link } from 'react-scroll';


export default class NavbarSubMenuItem extends React.Component {

  render(){
    return (
      <li>
          <Link activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-300} 
                duration={700} 
                onSetActive={this.handleSetActive} 
                to={this.props.id}
          >
            {this.props.value}
          </Link>
      </li>
    )
  }
}
