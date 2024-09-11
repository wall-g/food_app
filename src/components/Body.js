import { useEffect, useState } from "react";
import { swiggy_api } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"


const Body = () => {
    const [restaurantCards, setRestaurantCards] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(swiggy_api);
        const json = await data.json();
        const resCards = json.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantCards(resCards);
        setfilteredRestaurants(resCards);
    }

    function filterTopRated() {
        const topRatedRestaurants = restaurantCards.filter((res) => res.info.avgRatingString >= 4.2);
        setfilteredRestaurants(topRatedRestaurants);
    }               

    function search(e) {
        const wordToSearch = e.target.value.toLowerCase();
        const filteredRestaurants = restaurantCards.filter((res) => wordToSearch === res.info.name.substring(0, wordToSearch.length).toLowerCase());
        (filteredRestaurants.length)? setfilteredRestaurants(filteredRestaurants): setfilteredRestaurants(restaurantCards)
    }

    return (!filteredRestaurants?.length) ?
        <Shimmer />
        :
        (
            <div>
                <div className="restaurant-body">
                    <div className="btn-container">
                        <button className="top-rated-btn" onClick={() => {filterTopRated()}}>top rated restaurant</button>
                        <div className="search-container">
                            <input type="text" id="search-input" placeholder="Search..." onChange={(e) => search(e)}/>
                        </div>
                    </div>
                    <div className="restaurant-card-body">
                        {filteredRestaurants.map((res) => <RestaurantCard key={res.info.id} restaurant={res} />)}
                    </div>
                </div>
            </div>

        )

}

export default Body;