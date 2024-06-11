import React, { useState } from 'react';
import "./finish.css";
import { Link } from 'react-router-dom';

export default function PurchasePage() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="purchase-container">
      <div className="purchase-page">
        <h1 className="page-title">Finalizar Compra</h1>
        <div className="product">
          <img src="https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882" alt="Tênis" className="product-image" />
          <div className="product-details">
            <h2 className="product-name">Tênis Casual Masculino Olympikus Drift</h2>
            <p className="product-price">Preço: R$ 444,00</p>
            <div className="quantity">
              <h2>Quantidade</h2>
              <div className='Cquantity'>
                <button onClick={decreaseQuantity}>-</button>
              </div>
              <div className="quantity-controls">
                <input type="number" className="quantity-input" value={quantity} readOnly />
              </div>
              <div className='Cquantity'>
                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <p className="product-description">Descrição do produto aqui.</p>
          </div>
        </div>
        <div className="purchase-actions">
          <Link className="back-to-cart" to={"/cart"}>Voltar para o Carrinho</Link>
          <Link className="back-to-cart" to={"/order"}>Finalizar Compra</Link>
        </div>
      </div>
    </div>
  );
}
