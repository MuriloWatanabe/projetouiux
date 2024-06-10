import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
<script src="https://cdn.tailwindcss.com"></script>

export default function Home() {
  return (
    <main>

      <div class="justify-center flex text-center	p-[50px] pr-[250px] ml-[200px]">
        <a class="text-black pr-[20px] text-center underline" href="">Produtos</a>
        <a class="text-black pr-[20px] text-center underline" href="">Masculino</a>
        <a class="text-black pr-[20px] text-center underline" href="">Feminino</a>  
      </div>
      <div class="text-center">
        <h1 class="text-center">Ofertas</h1>
        <h2>Tenis de Basquete</h2>
      </div>

  
      <div class="max-w-[700px] max-h-[500px] m-0 m-auto overflow-hidden border-[10px] border-solid border-slate-100 rounded-md mt-[20px] mb-[20px] flex justify-center">
      <Carousel 
          showArrows={true} 
          infiniteLoop={true} 
          autoPlay={true} 
          interval={3000} 
          showStatus={false} 
          showThumbs={false} 
          className="custom-carousel"
          style={{ textAlign: "center" }} 
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

      <div class="flex justify-center">
        <p><button class="bg-black rounded-3xl text-white py-[10px] px-[20px] text-center no-underline m-[10px] cursor-pointer transition-all ease-in	duration-300">Saiba Mais</button></p>
        <p><button class="bg-black rounded-3xl text-white py-[10px] px-[20px] text-center no-underline m-[10px] cursor-pointer transition-all ease-in	duration-300">Ver Ofertas</button></p>
        <p><button class="bg-black rounded-3xl text-white py-[10px] px-[20px] text-center no-underline m-[10px] cursor-pointer transition-all ease-in	duration-300">Para Você !</button></p>
      </div>

      <div class="text-black mt-[20px] text-2xl">
        <h1 class="text-center">Tênis de Basquete</h1>
      </div>

      <div class="justify-center flex m-[50px]">
        <div class="grid grid-cols-3 gap-[120px]">
          {/* Seus cards aqui */}<div class="w-[200px] h-[250px] bg-slate-100 overflow-hidden cursor-pointer text-center rounded-md	shadow-md	shadow-slate-150 transition-transform	duration-300">
            <Link to="/product" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" 
                alt="Adidas Harden Stepback" 
                style={{ width: "100%" }} 
              />
              <div class="p-[20px] text-center">
                <h1 class="mb-[10px] font-bold text-lg">Nike Kobe 6 3D</h1>
                <p>$199.99</p>
              </div>
            </Link>
          </div>

          <div class="w-[200px] h-[250px] bg-slate-100 overflow-hidden cursor-pointer text-center rounded-md	shadow-md	shadow-slate-150 transition-transform	duration-300">
            <Link to="/product" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" 
                alt="Adidas Harden Stepback" 
                style={{ width: "100%" }} 
              />
              <div class="p-[20px] text-center">
                <h1 class="mb-[10px] font-bold text-lg">Nike Kobe 6 3D</h1>
                <p>$199.99</p>
              </div>
            </Link>
          </div>

          <div class="w-[200px] h-[250px] bg-slate-100 overflow-hidden cursor-pointer text-center rounded-md	shadow-md	shadow-slate-150 transition-transform	duration-300">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div class="p-[20px] text-center">
              <h1 class="mb-[10px] font-bold text-lg">Nike Kobe 6 3D</h1>
              <p>$199.99</p>
            </div>
          </div>
          
          <div class="w-[200px] h-[250px] bg-slate-100 overflow-hidden cursor-pointer text-center rounded-md	shadow-md	shadow-slate-150 transition-transform	duration-300">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div class="p-[20px] text-center">
              <h1 class="mb-[10px] font-bold text-lg">Nike Kobe 6 3D</h1>
              <p>$199.99</p>
            </div>
          </div>

          <div class="w-[200px] h-[250px] bg-slate-100 overflow-hidden cursor-pointer text-center rounded-md	shadow-md	shadow-slate-150 transition-transform	duration-300">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div class="p-[20px] text-center">
              <h1 class="mb-[10px] font-bold text-lg">Nike Kobe 6 3D</h1>
              <p>$199.99</p>
            </div>
          </div>

          <div class="w-[200px] h-[250px] bg-slate-100 overflow-hidden cursor-pointer text-center rounded-md	shadow-md	shadow-slate-150 transition-transform	duration-300">
            <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}} />
            <div class="p-[20px] text-center">
              <h1 class="mb-[10px] font-bold text-lg">Nike Kobe 6 3D</h1>
              <p>$199.99</p>
            </div>
          </div>        
          </div>
      </div>
    </main>
  );
}
