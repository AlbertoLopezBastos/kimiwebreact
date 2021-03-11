import React from 'react'

export default function Menu() {

  const handleCheckBox = () => {
    return true
  }


  return (
    <div className="navigation">
        <input type="checkbox" id="navi-toggle" className="navigation__checkbox"/>
        <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li onClick={ () => handleCheckBox()} className="navigation__item"><a href="#agendas" className="navigation__link">Agendas</a></li>
                <li className="navigation__item"><a href="#cuadernos" className="navigation__link">Cuadernos</a></li>
                <li className="navigation__item"><a href="#kakeibo" className="navigation__link">Kakeibo</a></li>
                <li className="navigation__item"><a href="#babys" className="navigation__link">Babys</a></li>
                <li className="navigation__item"><a href="#mascotas" className="navigation__link">Mascotas</a></li>
                <li className="navigation__item"><a href="#telas" className="navigation__link">Telas</a></li>
                <li className="navigation__item"><a href="#about" className="navigation__link">Sobre Mí</a></li>
            </ul>
        </nav>
    </div>
  )
}
