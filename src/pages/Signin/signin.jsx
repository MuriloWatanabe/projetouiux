import "./signin.css"

export default function Signin() {
    return(
        <div className="signin-container">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="signin-form">
            <h3>Cadastrar</h3>
            <label for="email">Email</label>
            <input type="email" placeholder="Email" id="email" />
            <label for="birthdate">Data de nascimento</label>
            <input type="date" id="birthdate" />
            <label for="password">Senha</label>
            <input type="password" placeholder="Senha" id="password" />

            <button className="signin-button">Log In</button>

            <div><p className="terms">Ao continuar, afirmo que concordo com a <a className="terms-anchor" href="/privacy">Política de Privacidade</a>e os <a className="terms-anchor" href="/termos">Termos de Uso</a></p></div>
            <div><p className="terms">Possui uma conta? <a className="terms-anchor" href="/login">Logar-se</a></p></div>
        </form>
    </div>
    )
}