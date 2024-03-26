import { img_url } from "../utils/mockData";

const RestaurantCard = (props) => {
    const restaurant = props.restaurant.info;
    return (
        <div className="restaurant-card">
            <div className="restaurant-img">
                <img src={img_url + restaurant.cloudinaryImageId}></img>
            </div>
            <div className="restaurant-card-content">
                <h5>{restaurant.name}</h5>
                <h6>{restaurant.avgRatingString}</h6>
                <h6>{restaurant.cuisines.toString()}</h6>
                <h6>{restaurant.areaName}</h6>
            </div>
        </div>
    )
}

export default RestaurantCard;