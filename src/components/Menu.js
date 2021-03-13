import React from 'react';
import ReactDom from 'react-dom';

export default function Menu() {

  const handleCloseMenu= () => {
    return 'hi';
  }


  return ReactDom.createPortal(
    <div className="menu">
      <div className="navigation">
          <input type="checkbox" id="navi-toggle" className="navigation__checkbox"/>
          <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
              <ul className="navigation__list">
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#agendas" className="navigation__link">Agendas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#cuadernos" className="navigation__link">Cuadernos</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#kakeibo" className="navigation__link">Kakeibo</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#babys" className="navigation__link">Babys</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#mascotas" className="navigation__link">Mascotas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#telas" className="navigation__link">Telas</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#about" className="navigation__link">Sobre Mí</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="#buy" className="navigation__link">Cómo comprar</a></li>
                  <li onClick={() => { handleCloseMenu()}} className="navigation__item"><a href="https://www.instagram.com/kimieartesanal/" className="navigation__link"  target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
          </nav>
      </div>
    </div>,
     document.getElementById('menu-root')
  )
}
