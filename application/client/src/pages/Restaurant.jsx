import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import '../styles/MenuItem.css';

const Restaurant = (props) => {

    const {id} = useParams();

    const [newItem, setNewItem] = useState([]);

    useEffect(() => {

        const getMenu = async () => {
            try {
                const response = await axios.get(`/restaurants/getMenu/${id}`);
                let rows = response.data;
                console.log(response);
                if (rows.length > 0) {
                    setNewItem([...rows]);
                } else {
                    console.log("No Menu Items to Show!");
                }
            } catch (err) {
                console.error(err);
            }
        };
        getMenu();
    }, [id]);

    return (
        <div className='restaurant'>
            <h1>Menu</h1>
            <div className='menu_container'>
                {newItem.map(item => {
                    return (
                        <MenuItem
                            image={item.image}
                            itemName={item.name}
                            price={item.price}
                        />
                    )
                })}
            </div>

        </div>
    );
};

export default Restaurant;