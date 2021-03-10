import React, { Component } from 'react';
import Anouncement from './Anouncement';
import Navbar from './Navbar';
import Slider from './Slider';
import Products from './Products';
import Product from './Product';
import Buy from './Buy';
import About from './About';
import Instagram from './Instagram';
import Footer from './Footer';
import Whatsapp from './Whatsapp';

export default class App extends Component {
  render() {
    return (
      <div>
        <Anouncement/>  
        <Navbar/>
        <Slider/>  
        <Products title="Agendas" subtitle="Para vos" id="agendas">      
            <Product img="1" description="Semanal" id="semanal" price="US9.55"/>
            <Product img="2" description="Universitaria" id="universitaria" price="US9.55"/>
            <Product img="3" description="Docente" id="docente" price="US9.55"/>
        </Products>
        <Products title="Cuadernos" subtitle="Para otro" dark id="cuadernos" >
          <Product img="2" description="Rayado" id="rayado" price="US9.55"/>
          <Product img="3" description="Cuadriculado" id="cuadriculado" price="US9.55"/>
          <Product img="1" description="Punteado" id="punteado" price="US9.55"/>
        </Products>
        <About/>  
        <Products title="Kakeibo" subtitle="Método de ahorro japonés" dark id="kakeibo">
          <Product img="3" description="Kakeibo" price="US9.55"/>
        </Products>
        <Products title="Babys" subtitle="Para tu baby" id="babys">
          <Product img="2" description="Baby" price="US9.55"/>
        </Products>
        <Buy/>  
        <Products title="Mascotas" subtitle="Para tu amigo fiel" id="mascotas">
          <Product img="3" description="Libreta Sanitaria Clasica" id="clasica" price="US9.55"/>
          <Product img="2" description="Libreta Sanitaria Deluxe" id="deluxe" price="US9.55"/>
        </Products>
        <Products title="Telas" subtitle="De todo tipo" dark id="telas">
          <Product img="1" description="Nihon" id="nihon" price="US9.55"/>
          <Product img="3" description="Miryoku" id="miryoku" price="US9.55"/>
          <Product img="2" description="Tradicionales" id="tradicionales" price="US9.55"/>
          <Product img="2" description="Personalizadas" id="personalizadas" price="US9.55"/>
        </Products>
        <Instagram/>  
        <Footer/>  
        <Whatsapp/>        
      </div>
    )
  }
}
