import "./order.css";
import React from 'react';
import { useState } from "react";

export default function Order() {

    const [showModal, setShowModal] = useState(false);

    return(
        <div className="prim-cart-container">
        <div class="h-screen">
            <h1>Pedidos</h1>
            <div className="cart-container">
                <div className="img-container"><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>
                <div className="cart-card">
                    <div className="ds3"><p>Preço: R$ 444</p></div>
                </div>
                <div className="contador">
                    <label htmlFor="">Qtd:</label>
                    <input type="number" value={1} readOnly />
                </div>
                <div className="btn-del-container">
                    <button onClick={() => setShowModal(true)} className="btn-del ds3"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg></button>
                </div>
            </div>
            <hr />
            <div className="cart-container">
                <div className="img-container"><img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" width={250} height={250} alt="" /></div>
                <div className="cart-card">

                    <div className="ds3"><p>Preço: R$ 444</p></div>
                </div>
                <div className="contador">
                    <label htmlFor="">Qtd:</label>
                    <input type="number" value={1} readOnly />
                </div>
                <div className="btn-del-container">
                    <button onClick={() => setShowModal(true)} className="btn-del ds3"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg></button>
                </div>
            </div>
            <hr />
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="flex justify-end cursor-pointer">
                                <h3 onClick={() => setShowModal(false)}>X</h3>
                            </div>
                                <div className="mt-3 sm:flex">
                                <div><img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" width={250} height={250} alt="" /></div>

                                    <div className="mt-2 sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Tênis
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Preço: R$444
                                        </p>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Quantidade: 1
                                        </p>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Tamanho: 42
                                        </p>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Marca: Olympikus
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}