import React from 'react';
import NavbarContainer from './NavbarContainer';
import NavbarSubMenu from './NavbarSubMenu';
import NavbarSubMenuItem from './NavbarSubMenuItem';
import icons from '../img/sprite.svg';
import Images from './Images';

export default function Navbar() {

const instagramIcon = <svg className="instagram__icon">        
                        <use xlinkHref={`${icons}#icon-instagram`}></use>                           
                      </svg>;

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="logo__icon" src={Images.logo} alt="kimi logo"></img>  
      </div>
      <div className="navbar__nav">  
        <NavbarContainer item="Agendas" id="agendas">
          <NavbarSubMenu>
            <NavbarSubMenuItem value="semanal" id="semanal"/>
            <NavbarSubMenuItem value="universitaria" id="universitaria"/>
            <NavbarSubMenuItem value="docente" id="docente"/>
          </NavbarSubMenu>
        </NavbarContainer>
        <NavbarContainer item="Cuadernos" id="cuadernos">
          <NavbarSubMenu>
          <NavbarSubMenuItem value="rayado"  id="rayado"/>
          <NavbarSubMenuItem value="cuadriculado"  id="cuadriculado"/>
          <NavbarSubMenuItem value="punteado" id="punteado"/>
          <NavbarSubMenuItem value="babys" id="babys"/>
          <NavbarSubMenuItem value="kakeibo" id="kakeibo"/>
          </NavbarSubMenu>
        </NavbarContainer>
        <NavbarContainer item="Mascotas" id="mascotas">
          <NavbarSubMenu>
            <NavbarSubMenuItem value="libreta sanitaria clásica" id="clasica"/>
            <NavbarSubMenuItem value="libreta sanitaria deluxe" id="deluxe"/>
          </NavbarSubMenu>
        </NavbarContainer>
        <NavbarContainer item="Telas" id="telas">
          <NavbarSubMenu>
            <NavbarSubMenuItem value="Nihon" id="nihon"/>
            <NavbarSubMenuItem value="Miryoku" id="miryoku"/>
            <NavbarSubMenuItem value="Tradicionales" id="tradicionales"/>
            <NavbarSubMenuItem value="Personalizadas" id="personalizadas"/>
          </NavbarSubMenu>
        </NavbarContainer>
        <NavbarContainer item="Sobre mí" id="about" />
        <NavbarContainer item="Cómo comprar" id="buy" />
        {false &&
        <NavbarContainer item={instagramIcon} link="https://www.instagram.com/kimieartesanal/"  />
        }
      </div>
    </nav>
  )
}