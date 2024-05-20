import RestaurantContainer from "./RestaurantContainer";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (<h1>Looks like you are offline!! Please check your network connection!</h1>);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search flex rounded-lg">
          <input className="border border-solid border-black px-4 m-4"
            type="text"
            placeholder="Search Restaurants"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button className="px-4 py-1 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((rest) =>
                  rest.info.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
          <div className="flex px-4 py-1 m-4 bg-blue-100 rounded-lg">
            <button
              onClick={() => {
                setListOfRestaurants(
                  listOfRestaurants.filter((res) => res.info.avgRating > 4.2)
                );
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantContainer  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
