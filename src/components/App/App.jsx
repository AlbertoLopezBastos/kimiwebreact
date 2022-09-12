import React, { useState } from 'react';
import Anouncement from '../Anouncement';
import Navbar from '../Navbar';
import HomeSlider from '../HomeSlider';
import Products from '../Products';
import Product from '../Product';
import Buy from '../Buy';
import About from '../About';
import Instagram from '../Instagram';
import Footer from '../Footer';
import WhatsApp from '../WhatsApp';
import productImg from '../Images';
import productDescriptions from '../ProductDescriptions';
import productPrices from '../ProductPrices';
import Modal from '../Modal';
import Menu from '../Menu';
import customData from '../Data/Products'

import '../../styles/base.css';

const App = () =>  {

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

      {customData.map((category,index) => {
        return (
          <Products dark={index%2==1} key={category.id} title={category.title} subtitle={category.subtitle} id={category.id}>   
              {category.products.map(product =>               
                  <Product 
                  key={product.id}
                  title={product.title} 
                  id={product.id} 
                  img={productImg[product.id]} 
                  price={productPrices[product.id]} 
                  click={() => handleOpenModal({ title:product.title, desc: productDescriptions[product.id], img: productImg[`${product.id}Modal`]})} 
                />              
              )}
          </Products> 
        )}
      )}
      
      <About/>

      <Buy/>

      <Instagram/> 

      <Footer/>  

      <WhatsApp/>  
    </div>
  );  
}

export default App;


