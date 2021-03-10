import React from 'react';

export default function NavbarSubMenu(props) {
  return (
    <ul className="navbar__sub-menu">
      {props.children}
    </ul>
  )
}
