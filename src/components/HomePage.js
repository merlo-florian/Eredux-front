import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Item from "./Item";
import axios from "axios";
import { useStateValue } from "./stateProvider";
import { Link } from "react-router-dom";

const HomePage = () => {
    const { user } = useStateValue();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('http://localhost:3000/api/get/items');
                setData(response);
                console.log(data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className=" min-h-screen  bg-slate-300">
            <Navbar />

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
                {data.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};
export default HomePage;

