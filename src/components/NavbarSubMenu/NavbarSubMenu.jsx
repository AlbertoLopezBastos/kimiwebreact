import React from 'react';

import s from  './NavbarSubMenu.module.css';

export default function NavbarSubMenu(props) {
  return (
    <ul className={s.navbar__subMenu}>
      {props.children}
    </ul>
  )
}
