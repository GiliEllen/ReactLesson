import React, { useState, useEffect } from "react";
import axios from "axios";

const NavBar = () => {
    const [items, setItems] = useState<string>()
    
    async function handleGetSource() {
        try {
            const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random`);
            console.log(data);

            setItems(data.message)
          } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log("on load");
        handleGetSource();
    },[]);

    return (
        <div>
            <img src={items} alt="" />
        </div>
    )

};

export default NavBar;