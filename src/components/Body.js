import RestaurantContainer from "./RestaurantContainer";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restaurants"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button
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
          <div className="filter-btn">
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

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantContainer  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
