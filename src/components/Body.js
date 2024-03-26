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
        const resCards = json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantCards(resCards);
    }
    return (!restaurantCards.length) ?
        <Shimmer />
        :
        (
            <div className="restaurant-body">
                <div className="restaurant-card-body">
                    {restaurantCards.map((res) => <RestaurantCard key={res.info.id} restaurant={res} />)}
                </div>
            </div>

        )

}

export default Body;