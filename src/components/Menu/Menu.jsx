import React, {useRef}from 'react';
import ReactDom from 'react-dom';

import s from  './Menu.module.css';

const Menu = () => {

const check = useRef();

  const handleCloseMenu = () => {
    check.current.checked = false;
  }

  return ReactDom.createPortal(
    <div className={s.menu}>
      <div className={s.menu}>
          <input type="checkbox" ref={check} id="navi-toggle" className={s.checkbox}/>

          <label htmlFor="navi-toggle" className={s.btn}>
              <span className={s.icon}>&nbsp;</span>
          </label>

          <div className={s.background}>&nbsp;</div>

          <nav className={s.nav}>
              <ul className={s.list}>
                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#agendas" className={s.link}>Agendas</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#cuadernos" className={s.link}>Cuadernos</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#kakeibo" className={s.link}>Kakeibo</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#babys" className={s.link}>Babys</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#mascotas" className={s.link}>Mascotas</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#telas" className={s.link}>Telas</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#about" className={s.link}>Sobre Mí</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="#buy" className={s.link}>Cómo comprar</a></li>

                  <li onClick={() => { handleCloseMenu()}} className={s.item}><a href="https://www.instagram.com/kimieartesanal/" className={s.link}  target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
          </nav>
      </div>
    </div>,
     document.getElementById('menu-root')
  )
}

export default Menu;