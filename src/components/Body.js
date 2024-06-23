import { useEffect, useState } from "react";
import { swiggy_api } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"


const Body = () => {
    const [restaurantCards, setRestaurantCards] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(swiggy_api);
        const json = await data.json();
        const resCards = json.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantCards(resCards);
    }

    function filterTopRated() {
        const topRatedRestaurants = restaurantCards.filter((res) => res.info.avgRatingString >= 4.2);
        setRestaurantCards(topRatedRestaurants);
    }               

    return (!restaurantCards?.length) ?
        <Shimmer />
        :
        (
            <div>
                <div className="restaurant-body">
                    <div className="btn-container">
                        <button className="top-rated-btn" onClick={() => {filterTopRated()}}>top rated restaurant</button>
                        <div class="search-container">
                            <input type="text" id="search-input" placeholder="Search..."/>
                        </div>
                    </div>
                    <div className="restaurant-card-body">
                        {restaurantCards.map((res) => <RestaurantCard key={res.info.id} restaurant={res} />)}
                    </div>
                </div>
            </div>

        )

}

export default Body;