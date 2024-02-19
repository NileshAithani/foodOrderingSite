import { CDN_URL } from "../config/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { resData } = props;
  
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId , sla} = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          // src=""
           src = {CDN_URL+ cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;