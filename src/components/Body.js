import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="restaurant-body">
            <div className="restaurant-card-body">
                {restaurants.map((res) => <RestaurantCard key={res.info.id} restaurant={res} />)}
            </div>
        </div>
    )
}

export default Body;