import React from 'react';
import NavbarContainer from '../NavbarContainer';
import NavbarSubMenu from '../NavbarSubMenu';
import NavbarSubMenuItem from '../NavbarSubMenuItem';
import icons from '../../img/sprite.svg';

import s from  './Navbar.module.css';

const Navbar = () => {

const instagramIcon = <svg className="instagram__icon">        
                        <use xlinkHref={`${icons}#icon-instagram`}></use>                           
                      </svg>;

  return (
    <nav className={s.navbar}>
      <div className={s.logo}>
        <h1 className={s.logoTitle}>KIMI</h1>

        <h1 className={s.logoSubtitle}>Encuadernación Artesanal</h1>
      </div>

      <div className={s.navbarNav}>  
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
          </NavbarSubMenu>
        </NavbarContainer>
        <NavbarContainer item="Kakeibo" id="kakeibo"/>

        <NavbarContainer item="Babys" id="babys"/>

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

        <NavbarContainer item={instagramIcon} link="https://www.instagram.com/kimieartesanal/"  />
      </div>
    </nav>
  )
}

export default Navbar;