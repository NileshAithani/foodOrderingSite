import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { resList } from "../config/mockData";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";
import UserContext from "../config/UserContext";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you're Offine, Check your Internet Connectivity</h1>;


  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

   const {loggedInUser , setUsername} = useContext(UserContext);






  return listOfData === 0 ? (
    <Shimmer />
  ) : (
    <section className="w-full">



      {/* Search Bar */}

      <div  className="flex justify-center items-center gap-2 ">
          <input
           className="py-2 border rounded-md px-10"
            placeholder="Search"
            type="text"
            value={searchText}
            onInput={(e) => {
              setsearchText(e.target.value);
            }}


            onKeyDown={ (e) => {
              if(e.key==="Enter"){
                const filterRestaurantData = listOfData.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterListOfData(filterRestaurantData);}}
              }
          />




        {/* Search Button */}
        
          <button
            className="bg-blue-500 text-white p-2 rounded-md  "
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




      {/* Filter Button */}
      
        <button
          className="p-2 m-6 bg-blue-300 border rounded-md shadow-lg shadow-slate-400 font-semibold text-white hover:bg-blue-500"
          onClick={() => {
            const filteredList = listOfData.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setfilterListOfData(filteredList);
          }}
        >
          Top Rated Restaurant Card
        </button>


        {/* Username Change for checking the context API concept */}
        <label>Username</label>
        <input className="border border-black px-2 mx-2" value={loggedInUser} onChange={(event)=> setUsername(event.target.value)} />
      




      {/* Restaurant Card */}
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-14  w-[1080px] ">

        {filterListOfData.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >

          {
            restaurant?.info?.promoted ? <RestaurantPromotedCard resData={restaurant} /> : <RestaurantCard resData={restaurant} />
            

          }
          
 
          </Link>

        ))}

        
</div>

</div>



    </section>
  );
};

export default Body;
