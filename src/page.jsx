import "./style.css"
import CarroselCategories from "../app/components/carroselcategories"

export default function Home() {
  return (
    <main>
      <header>
        <a className="nav-link" href="">Home</a>
        <a className="nav-link" href="">Sobre</a>
        <a className="nav-link" href="">Fale conosco</a>
      </header>
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
    <div className="Carrosel">
    <CarroselCategories/>
    </div>

    </main>
  );
}
