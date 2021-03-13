import React, {useRef}from 'react';
import ReactDom from 'react-dom';

export default function Menu() {

const check = useRef();

  const handleCloseMenu = () => {
    check.current.checked = false;
  }

  return ReactDom.createPortal(
    <div className="menu">
      <div className="menu">
          <input type="checkbox" ref={check} id="navi-toggle" className="menu__checkbox"/>
          <label htmlFor="navi-toggle" className="menu__button">
              <span className="menu__icon">&nbsp;</span>
          </label>
          <div className="menu__background">&nbsp;</div>

          <nav className="menu__nav">
              <ul className="menu__list">
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#agendas" className="menu__link">Agendas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#cuadernos" className="menu__link">Cuadernos</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#kakeibo" className="menu__link">Kakeibo</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#babys" className="menu__link">Babys</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#mascotas" className="menu__link">Mascotas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#telas" className="menu__link">Telas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#about" className="menu__link">Sobre Mí</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="#buy" className="menu__link">Cómo comprar</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="menu__item"><a href="https://www.instagram.com/kimieartesanal/" className="menu__link"  target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
          </nav>
      </div>
    </div>,
     document.getElementById('menu-root')
  )
}
