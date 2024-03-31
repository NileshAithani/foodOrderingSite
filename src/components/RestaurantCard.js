import UserContext from "../config/UserContext";
import { CDN_URL } from "../config/constants";
import { useContext, useState } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;
  const [showMore, setShowMore] = useState(false);

  const truncatedCuisines = showMore ? cuisines : cuisines.slice(0, 2);

  const username = useContext(UserContext);

  return (
    <div className="bg-white min-h-[437px] rounded-lg shadow-md p-4 mb-4 transition-transform duration-200 transform hover:scale-105 ">
      <img
        className="w-full h-48 object-fill rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <h4 className="text-gray-700 mb-2">
          {truncatedCuisines.join(", ")}
          {cuisines.length > 2 && (
            <span
              className="cursor-pointer text-blue-500"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? " less" : " more"}
            </span>
          )}
        </h4>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">{avgRating} stars</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Cost for Two:</span>
          <span className="font-bold">{costForTwo}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Delivery Time:</span>
          <span className="font-bold">{sla.deliveryTime} minutes</span>
        </div>

        <div>{username.loggedInUser}</div>
      </div>
    </div>
  );
};






export default RestaurantCard;






// Higher Order Component

//Takes Restaurant Card as an input and return Promoted Restaurant card as Output


export const withPromotedLabel = (RestaurantCard)=>{

  return (props)=>{
    return(
      <div>
        <label className="absolute z-10 bg-blue-600 p-1 m-1 rounded-md text-white">Promoted</label>
        <RestaurantCard {...props} className=""/>
      </div>
    )
  }

};
