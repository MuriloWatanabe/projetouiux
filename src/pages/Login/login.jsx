import "./login.css"

export default function Login() {
    return(
        <div className="container">

        <div className="card">
            <form action="" onClick={(event) => {event.preventDefault()}}>
                <span class="material-icons" id="material-icons">
                    person
                </span>
            <div className="inputs">
                <input className="input" type="text" placeholder="email"/>
                <input className="input" type="text" placeholder="senha"/>
            </div>
            <button className="save-btn">Login</button>
            </form>
        </div>
        </div>
    )
}