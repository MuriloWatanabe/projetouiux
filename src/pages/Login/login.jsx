import "./login.css"

export default function Login() {
    return(
    <div className="login-container">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="login-form">
            <h3>Logar</h3>
            <label for="email">Email</label>
            <input type="email" placeholder="Email" id="email" />
            <label for="password">Senha</label>
            <input type="password" placeholder="Senha" id="password" />

            <button className="login-button">Log In</button>

            <div><p className="terms">Ao continuar, afirmo que concordo com a <a className="terms-anchor" href="/privacy">Política de Privacidade</a>e os <a className="terms-anchor" href="/termos">Termos de Uso</a></p></div>
            <div><p className="terms">Não possui uma conta? <a className="terms-anchor" href="/signin">Cadastre-se</a></p></div>
        </form>
    </div>
    )
}