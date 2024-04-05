import { useState } from "react";
import ItemList from "./ItemList";
import { FaArrowAltCircleDown,FaArrowAltCircleUp } from "react-icons/fa";

const RestaurantCategory = ({ data  , showItems , setShowIndex}) => {
  //  console.log(data);
 

  // const[showItems,setShowItems]= useState(false);


  const handleclick = ()=>{
    setShowIndex();
  };



  return (
    <div className="flex justify-center items-center">
      {/* Header */}
      <div className="w-8/12 flex flex-col bg-gray-100 font-bold border-b-2 gap-2 m-2 p-2 shadow-md ">

      <div className="flex justify-between cursor-pointer " onClick={handleclick}>
      <span className=" text-2xl">{data?.title}</span>
        <span className=" text-4xl">{showItems ? <FaArrowAltCircleUp/> :<FaArrowAltCircleDown />}</span>
      </div>

     { showItems && <ItemList items={data?.categories[0].itemCards} />} 
        
      </div>

      
      

    

      {/* Accodian Body */}
    </div>
  );
};

export default RestaurantCategory;
