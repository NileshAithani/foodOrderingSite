import RestaurantCard from "./RestaurantCard";
import { resList } from "../config/mockData";
import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  //Local State Variable - Most powerful variable
  const [listOfData, setlistOfData] = useState([]);
  const [filterListOfData, setfilterListOfData] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://firesingh.github.io/api/Swiggy.json");
    // const data1 = await fetch("https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225");

    const json = await data.json();

    const myResData =
      //optional Chainning
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfData(myResData);
    setfilterListOfData(myResData);
  };

  return listOfData === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* --------Search Bar------------------ */}
      <div className="Search-Bar">
        <input
          placeholder="Search"
          type="text"
          value={searchText}
          onInput={(e) => {
            setsearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filterRestaurantData = listOfData.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setfilterListOfData(filterRestaurantData);
          }}
        >
          Search
        </button>
      </div>

      {/* ------------Filte Button------------- */}
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfData.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setfilterListOfData(filteredList);
        }}
      >
        Top Rated RestaurantCard
      </button>
      <div className="res-Container">
        {filterListOfData.map((restaurant) => (
          <Link className="CardLink"
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
