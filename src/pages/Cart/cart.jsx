import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CartItem({ id, imgUrl, itemName, itemPrice, quantity, onDelete }) {
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const increaseQuantity = () => {
        setItemQuantity(itemQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="flex items-center mb-4 bg-white p-4 rounded-md border border-gray-200 mx-4">
            <div>
                <img className="mr-4" src={imgUrl} width={250} height={250} alt={itemName} />
            </div>
            <div className="flex-grow mt-4">
                <p>{itemName}</p>
                <p>Preço total: R$ {itemPrice * itemQuantity}</p>
            </div>
            <div className="flex items-center">
                <button className="bg-black text-white border-0 rounded-md py-1 px-2 cursor-pointer transition-colors duration-300" onClick={decreaseQuantity}>-</button>
                <input className="w-16 border border-gray-20 rounded-md m-1 pl-2 text-center" type="number" value={itemQuantity} readOnly />
                <button className="bg-black text-white border-0 rounded-md py-1 px-2 cursor-pointer transition-colors duration-300" onClick={increaseQuantity}>+</button>
            </div>
            <div className="ml-4">
                <button className="bg-red-700 text-white rounded-md py-1 px-2" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                        <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, imgUrl: "https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882", itemName: "Tênis", itemPrice: 444, quantity: 1 },
        { id: 2, imgUrl: "https://static.netshoes.com.br/produtos/tenis-casual-masculino-olympikus-drift/04/2I2-2484-004/2I2-2484-004_zoom4.jpg?ts=1624644882", itemName: "Tênis", itemPrice: 444, quantity: 2 }
    ]);

    const handleDeleteItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="my-4 text-2xl font-bold">Carrinho</h1>
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    imgUrl={item.imgUrl}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                    quantity={item.quantity}
                    onDelete={handleDeleteItem}
                />
            ))}
            <div className="text-center mt-4">
                <Link to="/Finish" className="bg-black text-white rounded-md py-2 px-4 cursor-pointer transition-colors duration-300">Finalizar Compra</Link>
            </div>
        </div>
    );
}
