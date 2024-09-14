import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurantData = useRestaurantData(resId);

    if (restaurantData === null) {
        return <Shimmer />
    } else {
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