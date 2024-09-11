import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restaurantDetails_api } from '../utils/mockData'
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [restaurantData, setRestaurantData] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        getRestaurantData();
    }, [])

    async function getRestaurantData() {
        const data = await fetch(restaurantDetails_api+resId);
        const json = await data.json();
        setRestaurantData(json);
    }

    if (restaurantData === null) {
        return <Shimmer />
    } else {
        console.log(restaurantData);
        const { name, costForTwoMessage, avgRating } = restaurantData?.data?.cards[2]?.card?.card?.info;
        return (
            <>
                <h1>{name}</h1>
                <h3>{costForTwoMessage}</h3>
                <h3>{avgRating}</h3>
            </>
        )
    }

}

export default RestaurantMenu;