import { useState, useEffect } from "react";
import { swiggy_api } from "./mockData";

const useRestaurantCards = (setfilteredRestaurants) => {
    const [restaurantCards, setRestaurantCards] = useState([]);
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

    return restaurantCards;
}

export default useRestaurantCards;