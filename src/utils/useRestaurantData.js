import { useState, useEffect } from "react";
import { restaurantDetails_api } from "./mockData";

const useRestaurantData = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);
    useEffect(() => {
        getRestaurantData();
    }, [])

    async function getRestaurantData() {
        const data = await fetch(restaurantDetails_api+resId);
        const json = await data.json();
        setRestaurantData(json);
    }

    return restaurantData;
}

export default useRestaurantData;