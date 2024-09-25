
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_LINK } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

   
    const {resId} = useParams();
    
    const resItems = useRestaurantMenu(resId);
    
    if(resItems === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resItems?.cards[2]?.card?.card?.info;

    const {itemCards} = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    // const categories = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card;

    const categories = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);
    

     
    return (
        <div className="text-center"> 
            <h1 className="my-6 font-bold  text-3xl">{name}</h1>
            <h3 className="font-bold text-xl">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            {categories.map((category)=><RestaurantCategory data={category.card?.card} />)}
            
        </div>
    )
};

export default RestaurantMenu;