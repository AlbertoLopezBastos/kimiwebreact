import React, { useState } from 'react';
import Anouncement from './Anouncement';
import Navbar from './Navbar';
import HomeSlider from './HomeSlider';
import Products from './Products';
import Product from './Product';
import Buy from './Buy';
import About from './About';
import Instagram from './Instagram';
import Footer from './Footer';
import Whatsapp from './Whatsapp';
import productImg from './Images';
import productDescriptions from './ProductDescriptions';
import productPrices from './ProductPrices';
import Modal from './Modal';
import Menu from './Menu';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('../../img/blog-1.jpg');
  const [modalDesc, setModalDesc] = useState('Descripcion');
  const [modalTitle, setModalTitle] = useState('titulo');

  const handleOpenModal = (info) => {
    setModalImg(info.img);
    setModalDesc(info.desc);
    setModalTitle(info.title);
    setIsOpen(true);
  }

  return (
    <div> 
      { true && <Menu/>}
      <Modal title={modalTitle} img={modalImg} desc={modalDesc} open={isOpen} onClose={() => setIsOpen(false)} />
      <Anouncement />  
      <Navbar />
      <HomeSlider width="100%" />

      <Products rows={3} title="Agendas" subtitle="lorem ipsum" id="agendas">      
        <Product 
          title="Semanal" 
          id="semanal" 
          img={productImg.semanal} 
          price={productPrices.semanal} 
          click={() => handleOpenModal({ title:'Semanal', desc: productDescriptions.semanal, img: productImg.semanalModal})} 
        />
        <Product 
          title="Universitaria" 
          id="universitaria" 
          img={productImg.universitaria} 
          price={productPrices.universitaria}  
          click={() => handleOpenModal({title:'Universitaria', desc: productDescriptions.universitaria, img: productImg.universitariaModal})}
        />
        <Product 
          title="Docente" 
          id="docente" 
          img={productImg.docente} 
          price={productPrices.docente} 
          click={() => handleOpenModal({title:'Docente', desc: productDescriptions.docente, img: productImg.docenteModal})} 
        />
      </Products>
      <Products rows={3} title="Cuadernos" subtitle="lorem ipsum" dark id="cuadernos" >
        <Product 
          title="Rayado" 
          id="rayado" 
          img={productImg.rayado} 
          price={productPrices.rayado}
          click={() => handleOpenModal({title:'Rayado', desc: productDescriptions.rayado, img: productImg.rayadoModal})} 
        />
        <Product 
          title="Cuadriculado" 
          id="cuadriculado" 
          img={productImg.cuadriculado} 
          price={productPrices.cuadriculado}
          click={() => handleOpenModal({title:'Cuadriculado', desc: productDescriptions.cuadriculado, img: productImg.cuadriculadoModal})} 
        />
        <Product 
          title="Punteado" 
          id="punteado" 
          img={productImg.punteado} 
          price={productPrices.punteado}
          click={() => handleOpenModal({title:'Punteado', desc: productDescriptions.punteado, img: productImg.punteadoModal})} 
        />
      </Products>
      <About/>  
      <Products rows={1} title="Kakeibo" subtitle="Método de ahorro japonés" dark id="kakeibo">
        <Product 
          title="Kakeibo" 
          img={productImg.kakeibo} 
          price={productPrices.kakeibo}
          click={() => handleOpenModal({title:'Kakeibo', desc: productDescriptions.kakeibo, img: productImg.kakeiboModal})} 
        />
      </Products>
      <Products rows={1} title="Babys" subtitle="lorem ipsum" id="babys">
        <Product 
          title="Baby" 
          img={productImg.baby} 
          price={productPrices.baby}
          click={() => handleOpenModal({title:'Baby', desc: productDescriptions.baby, img: productImg.babyModal})} 
        />
      </Products>
      <Buy/>  
      <Products rows={2} title="Mascotas" subtitle="lorem ipsum" id="mascotas">
        <Product 
          title="Libreta Sanitaria Clasica" 
          id="clasica" 
          img={productImg.sanitariaClasica} 
          price={productPrices.sanitariaClasica}
          click={() => handleOpenModal({title:'Libreta Sanitaria Clasica', desc: productDescriptions.sanitariaClasica, img: productImg.sanitariaClasicaModal})} 
        />
        <Product 
          title="Libreta Sanitaria Deluxe" 
          id="deluxe" 
          img={productImg.sanitariaDeluxe} 
          price={productPrices.sanitariaDeluxe}
          click={() => handleOpenModal({title:'Libreta Sanitaria Deluxe', desc: productDescriptions.sanitariaDeluxe, img: productImg.sanitariaDeluxeModal})} 
        />
      </Products>
      <Products rows={3} title="Telas" subtitle="lorem ipsum" dark id="telas">
        <Product 
          title="Nihon" 
          id="nihon" 
          img={productImg.nihon} 
          price={productPrices.nihon}
          click={() => handleOpenModal({title:'Nihon', desc: productDescriptions.nihon, img: productImg.nihonModal})} 
        />
        <Product 
          title="Miryoku" 
          id="miryoku" 
          img={productImg.miryoku} 
          price={productPrices.miryoku}
          click={() => handleOpenModal({title:'Miryoku', desc: productDescriptions.miryoku, img: productImg.miryokuModal})} 
        />
        <Product 
          title="Tradicionales" 
          id="tradicionales" 
          img={productImg.tradicionales} 
          price={productPrices.tradicionales}
          click={() => handleOpenModal({title:'Tradicionales', desc: productDescriptions.tradicionales, img: productImg.tradicionalesModal})} 
        />
        <Product 
          title="Personalizadas" 
          id="personalizadas" 
          img={productImg.personalizadas} 
          price={productPrices.personalizadas}
          click={() => handleOpenModal({title:'Personalizadas', desc: productDescriptions.personalizadas, img: productImg.personalizadasModal})} 
        />
      </Products>
      <Instagram/>  
      <Footer/>  
      <Whatsapp/>
  
    </div>
  );  
}



