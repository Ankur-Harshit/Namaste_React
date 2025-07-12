import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const menuList = useRestaurantMenu(resId); // creating a custom hook

  if(menuList===null) return <Shimmer />;

  const {name, costForTwoMessage, totalRatings} = menuList?.cards[2]?.card?.card?.info;
  // somewhere its itemcard/carousel....API issue
  const {itemCards} = menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const {carousel} = menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  if(itemCards===undefined)
  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>Total Ratings : {totalRatings}</h3>
      <h3>Menu</h3>
      <ul>
        {carousel.map((item)=>(
            <li key={item.dish.info.id}>
                {item.dish.info.name} :- Rs {item.dish.info.price/100}
            </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>Total Ratings : {totalRatings}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item)=>(
            <li key={item.card.info.id}>
                {item.card.info.name} :- Rs {item.card.info.price/100}
            </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
