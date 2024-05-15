import { useState,useEffect } from "react";
import { Menu_LINK } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resItems, setResItems] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(Menu_LINK + resId);

        const json = await data.json();
        console.log(json);
        setResItems(json.data);
    }
    return resItems;
}

export default useRestaurantMenu;