import "./login.css"

export default function Login() {
    return(
        <div className="container">

        <div className="card">
            <form id="login-form" action="">
                <span class="material-icons" id="material-icons">
                    person
                </span>
            <div className="inputs">
                <input className="input" type="email" placeholder="email" required/>
                <input className="input" type="password" placeholder="senha" required/>
            </div>
            <button className="btn-save" type="submit" onSubmit={(e) => {e.preventDefault()}}>Login</button>
            </form>
            <div>
                <p className="terms">Ao continuar, afirmo que concordo com a <a className="terms-anchor" href="/privacy">Política de Privacidade</a>e os <a className="terms-anchor" href="/termos">Termos de Uso</a></p>
            </div>
        </div>
        </div>
    )
}