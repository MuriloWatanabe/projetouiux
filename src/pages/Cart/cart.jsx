import "./cart.css";
import Button from 'react-bootstrap/Button';

export default function Cart() {
    return(
        <div>
        <h1>Carrinho</h1>
        <div className="cart-container">
            <div><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>
            <div className="cart-card ds3">
                <div className="ds3"><p>Tenis</p></div>
                <div className="ds3"><p>Preço total: R$ 444</p></div>
            </div>
            <div className="btn-del-container">
                <button className="btn-del ds3"><img className="btn-del-img" src="https://th.bing.com/th/id/OIP.Y3vNnClAy9LWAmeCwdexEAHaH3?rs=1&pid=ImgDetMain" alt="" /></button>
            </div>
        </div>
        <hr />
        <div className="cart-container">
            <div><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>
            <div className="cart-card ds3">
                <div className="ds3"><p>Tenis</p></div>
                <div className="ds3"><p>Preço total: R$ 444</p></div>
            </div>
            <div className="btn-del-container">
                <button className="btn-del ds3"><img className="btn-del-img" src="https://th.bing.com/th/id/OIP.Y3vNnClAy9LWAmeCwdexEAHaH3?rs=1&pid=ImgDetMain" alt="" /></button>
            </div>
        </div>
        <div className="btn-finish-container">
            <button className="btn-finish">Finalizar compra</button>
        </div>    
        </div>
    )
}