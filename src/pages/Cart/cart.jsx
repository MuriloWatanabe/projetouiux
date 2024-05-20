import "./cart.css";
import React, { useState } from 'react';

export default function Cart() {
    const [numero, setNumero] = useState(0);

    const aumentarNumero = () => {
      setNumero(numero + 1);
    };
  
    const diminuirNumero = () => {
      if (numero > 0) {
        setNumero(numero - 1);
      }
    };
    return(
        <div>
        <h1>Carrinho</h1>
        <div className="cart-container">
            <div><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>
            <div className="cart-card ds3">
                <div className="ds3"><p>Tenis</p></div>
                <div className="ds3"><p>Preço total: R$ 444</p></div>
            </div>
            <div className="contador">
              <button onClick={diminuirNumero}>-</button>
              <input type="number" value={numero} readOnly />
              <button onClick={aumentarNumero}>+</button>
            </div>
            <div className="btn-del-container">
                <button className="btn-del ds3"><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#000000"><path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/></svg></button>
            </div>
        </div>
        <hr />
        <div className="cart-container">
            <div><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>
            <div className="cart-card ds3">
                <div className="ds3"><p>Tenis</p></div>
                <div className="ds3"><p>Preço total: R$ 444</p></div>
            </div>
            <div className="contador">
              <button onClick={diminuirNumero}>-</button>
              <input type="number" value={numero} readOnly />
              <button onClick={aumentarNumero}>+</button>
            </div>
            <div className="btn-del-container">
                <button className="btn-del ds3"><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#000000"><path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/></svg></button>
            </div>
        </div>
        <div className="btn-finish-container">
            <button className="btn-finish">Finalizar compra</button>
        </div>    
        </div>
    )
}
