import { CDN_URL } from "../config/constants";


const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="text-start text-sm gap-3">

      {items.map((item) => (

        <div key={item?.card?.info?.id} className="p-2 m-2 border-b-4 flex justify-between ">
         
          <div className="w-10/12">
          <div className="flex flex-col">
            <span >{item?.card?.info?.name}</span>
            <span>
              Rs.{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
          </div>

          <div className="font-normal text-xs">
            <p>{item?.card?.info?.description}</p>
          </div>
          </div>

          <div className="flex items-end">
          <button className=" absolute z-10 bg-white shadow-lg rounded-md m-auto p-1 right-[302px] ">Add +</button>
          <img src={CDN_URL + item?.card?.info?.imageId} alt="Dish Image" className="w-20 rounded-md"/>
          

          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
