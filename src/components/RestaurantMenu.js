import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resItems, setResItems] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId=80107&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
        setResItems(json.data);
    }
    
    if(resItems === null) return <Shimmer />

    const {restaurantData} = resItems.cards[1].card.card.gridElements.infoWithStyle.restaurants
     
    return (
        <div>
            <h1>{restaurantData[0].info.name}</h1>
            <h3>{restaurantData[0].info.cuisines} - {restaurantData[0].info.costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                <li>items</li>
            </ul>
        </div>
    )
};

export default RestaurantMenu;