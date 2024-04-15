import "./navbar.css"

export default function Navbar() {
    return(
        <header className="navbar">
            <div className="left-side">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/about">Sobre</a>
                <a className="nav-link" href="/contact">Fale conosco</a>
            </div>
            <div className="right-side">
                <a className="nav-link" href="/cart">
                    <span class="material-icons">
                        shopping_bag
                    </span>
                </a>
            </div>
        </header>
    )
}