import React, {useRef}from 'react';
import ReactDom from 'react-dom';

import s from  './Menu.module.css';

export default function Menu() {

const check = useRef();

  const handleCloseMenu = () => {
    check.current.checked = false;
  }

  return ReactDom.createPortal(
    <div className={s.menu}>
      <div className={s.menu}>
          <input type="checkbox" ref={check} id="navi-toggle" className={s.menu__checkbox}/>
          <label htmlFor="navi-toggle" className={s.menu__button}>
              <span className={s.menu__icon}>&nbsp;</span>
          </label>
          <div className={s.menu__background}>&nbsp;</div>

          <nav className={s.menu__nav}>
              <ul className={s.menu__list}>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#agendas" className={s.menu__link}>Agendas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#cuadernos" className={s.menu__link}>Cuadernos</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#kakeibo" className={s.menu__link}>Kakeibo</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#babys" className={s.menu__link}>Babys</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#mascotas" className={s.menu__link}>Mascotas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#telas" className={s.menu__link}>Telas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#about" className={s.menu__link}>Sobre Mí</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="#buy" className={s.menu__link}>Cómo comprar</a></li>
                  <li onClick={() => { handleCloseMenu()}} className={s.menu__item}><a href="https://www.instagram.com/kimieartesanal/" className={s.menu__link}  target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
          </nav>
      </div>
    </div>,
     document.getElementById('menu-root')
  )
}
