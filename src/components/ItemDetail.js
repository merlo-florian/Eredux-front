import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useStateValue } from "./stateProvider";

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    const [{ user, basket }, dispatch] = useStateValue();

    // using contextAPI to add items to basket and update the cart
    const addToBasket = (id, name, img, price) => {
        let isAdded = false;
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id == id) {
                isAdded = true;
            }
        }
        if (!isAdded) {
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: id,
                    name: name,
                    img: img,
                    price: price
                },
            });
        }
        console.log(basket, user);
    };

    // fetching items from the server
    useEffect(() => {
        async function fetchData() {
            await axios
                .get("http://localhost:3000/apip/items/" + id)
                .then((res) => {
                    console.log(res.data);
                    setItem(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);
    return (
        <div className="min-h-screen bg-slate-300 items-center">
            <Navbar />
            {/* getting id parameter and using it to retrieve details of a specific item */}
            {item != 0 ? (
                <div className="flex h-auto flex-row justify-evenly mt-20 p-10">
                    <div className="w-1/3 h-auto">
                        <img
                            className="h-auto"
                            src={'http://localhost:3001/' + item.img}
                            alt={id}
                        />
                    </div>
                    <div className="w-1/2 my-auto">
                        <h1 className="text-4xl font-bold">
                            {item.name}
                        </h1>
                        <p className="text-lg mt-3">
                            test description
                        </p>
                        <p className="text-3xl mt-5">
                            {item.price + "€/Kg"}
                        </p>
                        <div className="flex mt-5 w-5/12 justify-between">
                            <div>
                                <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900">Quantité</label>
                                <input type="text" id="quantity" class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                        </div>
                        <div className="flex mt-5 w-5/12 justify-between">
                            <button
                                onClick={() => {
                                    if (user) {
                                        addToBasket(
                                            item.id,
                                            item.name,
                                            item.img,
                                            item.price
                                        )
                                    } else {
                                        navigate('/login')
                                    }
                                }}
                                className="self-end bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded"
                            >
                                <a href="#">Ajouter au panier</a>
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ItemDetail;