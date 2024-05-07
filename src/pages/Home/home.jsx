import "./home.css"
import CarroselCategories from "../../components/Carrosel/carroselcategories";

export default function Home() {
  return (
    <main>
    <div className="a2">
        <a href="">Produtos</a>
        <a href="">Ofertas</a>
        <a href="">Masculino</a>
        <a href="">Feminino</a>  

    </div>
    <div className="titles">
      <h1>Ofertas</h1>
      <h2>Tenis de Basquete</h2>
    </div>
   <div className="ImbPrincipal">
    <img src="https://image-cdn.hypb.st/https://hypebeast.com/wp-content/blogs.dir/4/files/2024/02/one-piece-puma-suede-collection-release-date-3.jpeg?cbr=1&q=90" alt="" />
   </div>

<div className="SecondNavbar">
  <p><button class="btnO">Saiba Mais</button></p>
  <p><button class="btnO">Ver Ofertas</button></p>
  <p><button class="btnO">Para Você !</button></p>
</div>

<div className="PrimeiroTitulo">
  <h1>Tênis de Basquete</h1>
</div>

   {/* Cards dos Tenis para compra */}
   <div className="Cards">

<div className="grid-container">

   <div class="cardz" onclick="location.href='https://www.example.com';">
    <img src="https://th.bing.com/th/id/R.ec06d43bacb929c2e9f95cab13819809?rik=GPNzO8b3Q0%2fbnA&riu=http%3a%2f%2fsneakernews.com%2fwp-content%2fuploads%2f2008%2f12%2fzoom-lebron-vi-miami.jpg&ehk=dZQxwsiE4OTo%2fG2VBrbfOJanhQtF7aWaj1Mc7L%2bXAsE%3d&risl=&pid=ImgRaw&r=0" alt="Nike Zoom LeBron VI" style={{width: "100%"}}></img>
    <div class="cardz-content">
        <h1 class="cardz-title">Nike Zoom LeBron VI</h1>
        <p class="price">$199.99</p>
    </div>
</div>

<div class="cardz" onclick="location.href='https://www.example.com';">
    <img src="https://cdn.shopify.com/s/files/1/0463/6734/2742/products/1_3c88e6a5-d47b-4140-befc-58e913239281.jpg?v=1616355246" alt="Nike Kobe 6 Protro Grinch" style={{width: "100%"}}></img>
    <div class="cardz-content">
        <h1 class="cardz-title">Nike Kobe 6 Protro Grinch</h1>
        <p class="price">$199.99</p>
    </div>
</div>

<div class="cardz" onclick="location.href='https://www.example.com';">
    <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Adidas Harden Stepback" style={{width: "100%"}}></img>
    <div class="cardz-content">
        <h1 class="cardz-title">Nike Kobe 6 3D </h1>
        <p class="price">$199.99</p>
    </div>
</div>
    
<div class="cardz" onclick="location.href='https://www.example.com';">
    <img src="https://th.bing.com/th/id/R.ec06d43bacb929c2e9f95cab13819809?rik=GPNzO8b3Q0%2fbnA&riu=http%3a%2f%2fsneakernews.com%2fwp-content%2fuploads%2f2008%2f12%2fzoom-lebron-vi-miami.jpg&ehk=dZQxwsiE4OTo%2fG2VBrbfOJanhQtF7aWaj1Mc7L%2bXAsE%3d&risl=&pid=ImgRaw&r=0" alt="Nike Zoom LeBron VI" style={{width: "100%"}}></img>
    <div class="cardz-content">
        <h1 class="cardz-title">Nike Zoom LeBron VI</h1>
        <p class="price">$199.99</p>
    </div>
</div>

<div class="cardz" onclick="location.href='https://www.example.com';">
    <img src="https://th.bing.com/th/id/R.ec06d43bacb929c2e9f95cab13819809?rik=GPNzO8b3Q0%2fbnA&riu=http%3a%2f%2fsneakernews.com%2fwp-content%2fuploads%2f2008%2f12%2fzoom-lebron-vi-miami.jpg&ehk=dZQxwsiE4OTo%2fG2VBrbfOJanhQtF7aWaj1Mc7L%2bXAsE%3d&risl=&pid=ImgRaw&r=0" alt="Nike Zoom LeBron VI" style={{width: "100%"}}></img>
    <div class="cardz-content">
        <h1 class="cardz-title">Nike Zoom LeBron VI</h1>
        <p class="price">$199.99</p>
    </div>
</div>

<div class="cardz" onclick="location.href='https://www.example.com';">
    <img src="https://th.bing.com/th/id/R.ec06d43bacb929c2e9f95cab13819809?rik=GPNzO8b3Q0%2fbnA&riu=http%3a%2f%2fsneakernews.com%2fwp-content%2fuploads%2f2008%2f12%2fzoom-lebron-vi-miami.jpg&ehk=dZQxwsiE4OTo%2fG2VBrbfOJanhQtF7aWaj1Mc7L%2bXAsE%3d&risl=&pid=ImgRaw&r=0" alt="Nike Zoom LeBron VI" style={{width: "100%"}}></img>
    <div class="cardz-content">
        <h1 class="cardz-title">Nike Zoom LeBron VI</h1>
        <p class="price">$199.99</p>
    </div>
</div>

</div>
   </div>
    </main>
  );
}
