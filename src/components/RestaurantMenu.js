
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_LINK } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

   
    const {resId} = useParams();
    
    const resItems = useRestaurantMenu(resId);
    
    if(resItems === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resItems?.cards[2]?.card?.card?.info;

    const {categories} = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const {itemCards} = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

     
    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {categories? categories[0].itemCards?.map((item)=>{
                    return(
                    <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100}</li>

                )}):itemCards?.map((item)=>{
                    return(
                    <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100}</li>

                )})}
                
            </ul>
        </div>
    )
};

export default RestaurantMenu;