import { useEffect, useState } from "react";
import { MAIN_API } from "../config/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MAIN_API + resId+".json");
    const json = await data.json();

    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
