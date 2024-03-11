import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../config/useRestaurantMenu";

const RestuarantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <div>{name}</div>
      <div>{cuisines}</div>
      <div>{costForTwoMessage}</div>
    </div>
  );
};

export default RestuarantMenu;
