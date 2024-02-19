import RestaurantCard from "./RestaurantCard";
import { resList } from "../config/mockData";
import React, { useEffect } from "react";
import { useState } from "react";

const Body = () => {
  const [listOfData, setlistOfData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://firesingh.github.io/api/Swiggy.json");
    // const data1 = await fetch("https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225");

    const json = await data.json();

    const myResData =
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants;
    setlistOfData(myResData);
  };

  return (
    <div className="body">
      {/* <div className="SearchBar">Search</div> */}
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfData.filter((res) => res.info.avgRating >= 4.5);
          setlistOfData(filteredList);
        }}
      >
        Top Rated RestaurantCard
      </button>

      <div className="res-Container">
        {listOfData.map((restaurant) => (
          <RestaurantCard key={listOfData.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
