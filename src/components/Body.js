import { useState } from "react";
import useRestaurantCards from "../utils/useRestaurantCards";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"

const Body = () => {
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const restaurantCards = useRestaurantCards(setfilteredRestaurants);

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