import React from 'react';

import s from  './NavbarSubMenu.module.css';

const NavbarSubMenu = (props) => {
  return (
    <ul className={s.subMenu}>
      {props.children}
    </ul>
  )
}

export default NavbarSubMenu;