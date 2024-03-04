import { useEffect, useState } from "react";
import { MAIN_API } from "../config/constants";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";


const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
     const data = await fetch(MAIN_API + resId+".json");
    const json = await data.json();

    console.log(json);  
    setResInfo(json.data);
 
  };

  if(resInfo===null) return <Shimmer/>


  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  return <div>
    <div>{name}</div>
    <div>{cuisines}</div>
    <div>{costForTwoMessage}</div>
  </div>;
};

export default RestuarantMenu;
