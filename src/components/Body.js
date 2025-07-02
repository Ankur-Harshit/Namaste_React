import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

let cnt = 0;
const Body = () => {
    // React Hooks
    // useState
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick = {()=>{
                    cnt++;
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.avgRating >= 4.5
                    );
                    setListOfRestaurants(filteredList);
                    console.log(filteredList);
                    console.log("Clicked "+cnt+" Times");
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )
            )
            }
            </div>
        </div>
    );
};
export default Body;