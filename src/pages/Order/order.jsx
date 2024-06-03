import "./order.css";
import React from 'react';

export default function Order() {


    return(
        <div>
            <h1>Pedidos</h1>
            <div className="cart-container">
                <div><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>
                <div className="cart-card">
                    <div className="ds3"><p>Tenis</p></div>
                    <div className="ds3"><p>Preço total: R$ 444</p></div>
                </div>
                <div className="contador">
                    <label htmlFor="">Quantidade:</label>
                    <input type="number" value={1} readOnly />
                </div>
                <div className="btn-del-container">
                    <button className="btn-del ds3"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg></button>
                </div>
            </div>
            <hr />
            <div className="cart-container">
                <div><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>
                <div className="cart-card">
                    <div className="ds3"><p>Tenis</p></div>
                    <div className="ds3"><p>Preço total: R$ 444</p></div>
                </div>
                <div className="contador">
                    <label htmlFor="">Quantidade:</label>
                    <input type="number" value={1} readOnly />
                </div>
                <div className="btn-del-container">
                    <button className="btn-del ds3"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg></button>
                </div>
            </div>
        </div>
    )
}