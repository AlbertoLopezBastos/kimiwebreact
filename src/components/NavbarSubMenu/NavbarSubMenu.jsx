import React from 'react';

import s from  './NavbarSubMenu.module.css';

const NavbarSubMenu = (props) => {
  return (
    <ul className={s.navbar__subMenu}>
      {props.children}
    </ul>
  )
}

export default NavbarSubMenu;