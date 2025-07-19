import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantsCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const menuList = useRestaurantMenu(resId); // creating a custom hook
  const [showIndex, setShowIndex] = useState(0);

  if(menuList===null) return <Shimmer />;

  const {name, costForTwoMessage, totalRatings} = menuList?.cards[2]?.card?.card?.info;
  // somewhere its itemcard/carousel....API issue
  
  const categories = menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log(categories);


  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <h2 className="font-bold text-l">{costForTwoMessage}</h2>
      <h3 className="font-bold text-l">Total Ratings : {totalRatings}</h3>
      {categories.map((category, index)=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index===showIndex?true:false}
      setShowIndex={()=>{index===showIndex?setShowIndex(null):setShowIndex(index)}}
      />)}
    </div>
  );
};
export default RestaurantMenu;
