import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../config/useRestaurantMenu";
import RestaurantCategory from "./restaurantCategory";
import { useState } from "react";

const RestuarantMenu = () => {

  const { resId } = useParams();
  //console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  const[showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  //console.log(resInfo);

  


  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[6]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


  const categories = itemCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  //console.log(categories);

  return (
    <div className="flex flex-col text-center gap-6 ">
      <div className="font-bold text-2xl py-3">{name}</div>
      <div className="text-lg font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </div>
      {/* Building the categories accodians */}
      {categories.map((category , index) => (
        <RestaurantCategory
          key="category?.card?.card?.categories[0]?.itemCards?.card?.info?.id"
          data={category?.card?.card}
          showItems ={index===showIndex ? true :false}
          setShowIndex = {()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestuarantMenu;
