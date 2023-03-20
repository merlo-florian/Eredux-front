import React from "react";
import { useStateValue } from "./stateProvider";
import { useNavigate } from "react-router-dom";


function Item({ id, name, img, price }) {
    const navigate = useNavigate();

    return (
        <div className=" hover:cursor-pointer flex flex-col items-center h-96 sm:w-1/6 w-1/2 bg-white m-2 rounded-md p-4">
            <img
                src={img}
                alt=""
                className=" w-full h-72 object-cover mb-3 overflow-hidden"
                //onClick={() => navigate(`/product/${id - 1}`)}
            />
            <div className=" p-2 h-fit mb-7">
                <p>{name}</p>
                <p className="mt-1">
                    <span>{price}€/Kg</span>
                </p>
            </div>
            <div className="flex w-full place-content-between px-1">
                <button
                    className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow cursor-pointer m-auto block"
                   // onClick={() => navigate(`/product/${id - 1}`)}
                >
                    Voir le produit
                </button>
            </div>
        </div>
    );
}

export default Item;