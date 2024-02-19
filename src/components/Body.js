import RestaurantCard from "./RestaurantCard";
import { resList } from "../config/mockData";
import React, { useEffect } from "react";
import { useState } from "react";

const Body = () => {
  // const fetchData = async () => {
  //   const data = await fetch("https://firesingh.github.io/api/Swiggy.json");
  //   const json = await data.json();
  //   let myResData =
  //     json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
  //       .restaurants;
  //   console.log(myResData[0].info);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [listOfData, setlistOfData] = useState(resList);

  // const [originalListData, setoriginalListData] = useState(resList);

  return (
    <div className="body">
      {/* <div className="SearchBar">Search</div> */}
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfData.filter((res) => res.avgRating >= 4.5);
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
