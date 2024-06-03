import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <main>
      {/* Promoção na parte superior do site */}

      <div className="a2">
        <a href="">Produtos</a>
        <a href="">Masculino</a>
        <a href="">Feminino</a>  
      </div>
      <div className="titles">
        <h1>Ofertas</h1>
        <h2>Tenis de Basquete</h2>
      </div>

  
      {/* Carrossel */}
      <div className="carousel-container">
      <Carousel 
          showArrows={true} 
          infiniteLoop={true} 
          autoPlay={true} 
          interval={3000} 
          showStatus={false} 
          showThumbs={false} 
          className="custom-carousel"
          style={{ textAlign: "center" }} // Centraliza o conteúdo do carrossel
        >
          <div>
            <img src="https://droper-media.us-southeast-1.linodeobjects.com/2032024201243829.webp" alt="" />
          </div>
          <div>
            <img src="https://droper-media.us-southeast-1.linodeobjects.com/2032024201710910.webp" alt="" />
          </div>
          <div>
            <img src="https://droper-media.us-southeast-1.linodeobjects.com/203202420916416.webp" alt="" />
          </div>
        </Carousel>
      </div>

      <div className="SecondNavbar">
        <p><button className="btnO">Saiba Mais</button></p>
        <p><button className="btnO">Ver Ofertas</button></p>
        <p><button className="btnO">Para Você !</button></p>
      </div>

      <div className="PrimeiroTitulo">
        <h1>Tênis de Basquete</h1>
      </div>

      {/* Cards dos Tenis para compra */}
      <div className="Cards">
        <div className="grid-container">
          {/* Seus cards aqui */}<div className="cardz">
            <Link to="/product" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" 
                alt="Adidas Harden Stepback" 
                style={{ width: "100%" }} 
              />
              <div className="cardz-content">
                <h1 className="cardz-title">Nike Kobe 6 3D</h1>
                <p className="price">$199.99</p>
              </div>
            </Link>
          </div>

          <div className="cardz">
            <Link to="/product" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" 
                alt="Adidas Harden Stepback" 
                style={{ width: "100%" }} 
              />
              <div className="cardz-content">
                <h1 className="cardz-title">Nike Kobe 6 3D</h1>
                <p className="price">$199.99</p>
              </div>
            </Link>
          </div>

          <div className="cardz">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div className="cardz-content">
              <h1 className="cardz-title">Nike Kobe 6 3D</h1>
              <p className="price">$199.99</p>
            </div>
          </div>
          
          <div className="cardz">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div className="cardz-content">
              <h1 className="cardz-title">Nike Kobe 6 3D</h1>
              <p className="price">$199.99</p>
            </div>
          </div>

          <div className="cardz">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div className="cardz-content">
              <h1 className="cardz-title">Nike Kobe 6 3D</h1>
              <p className="price">$199.99</p>
            </div>
          </div>

          <div className="cardz">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div className="cardz-content">
              <h1 className="cardz-title">Nike Kobe 6 3D</h1>
              <p className="price">$199.99</p>
            </div>
          </div>        </div>
      </div>
    </main>
  );
}
