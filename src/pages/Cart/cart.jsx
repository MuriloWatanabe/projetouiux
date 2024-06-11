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
        <div class="flex align-center mb-[20px] bg-white p-[10px] rounded-md border-2 border-solid border-slate-100 mx-[30px]">
            <div>
                <img class="mr-[20px]" src={imgUrl} width={250} height={250} alt={itemName} />
            </div>
            <div class="grow mt-[25px]">
                <p>{itemName}</p>
                <p>Preço total: R$ {itemPrice * itemQuantity}</p>
            </div>
                <div>
                    <button class="bg-slate-800 text-white border-0 rounded-md py-[5px] px-[10px] cursor-pointer m-0 m-[5px] transitions-colors ease-in duration-300" onClick={decreaseQuantity}>-</button>
                </div>
            <div>
                <input class="w-[50px] border-1 border-solid border-slate-100 rounded-md m-0 m-[5px] pl-[20px] pr-[0px]" type="number" value={itemQuantity} readOnly />
            </div>
                <div>
                    <button onClick={increaseQuantity}>+</button>
                </div>
            <div className="btn-del-container">
                <button class="bg-red-700 text-color-300 rounded-md py-[5px] px-[10px]" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px">
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
        <div>
            <h1 class="m-[15px]">Carrinho</h1>
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
            <div class="text-center mt-[20px]">
            <Link  class="bg-black text-white border-0 rounded-md py-[10px] px-[20px] cursor-pointer transitions-colors ease-in duration-300" to="/Finish">Finalizar Compra</Link>
            </div>
        </div>
    );
}
