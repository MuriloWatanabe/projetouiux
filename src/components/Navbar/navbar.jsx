import "./navbar.css"

export default function Navbar() {
    return(
        <header className="navbar">
            <div className="left-side">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/about">Sobre</a>
                <a className="nav-link" href="/contact">Fale conosco</a>
            </div>
            {window.location.pathname == "/" ?
            <div className="right-side">
                <a className="nav-link" href="/cart">
                    <span class="material-icons" id="material-icons">
                        shopping_bag
                    </span>
                </a>
                <a className="nav-link" href="/login">
                    <span class="material-icons" id="material-icons">
                        person
                    </span>
                </a>
            </div>
            : null}
        </header>
    )
}