import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
let cnt = 0;
const Body = () => {
    // React Hooks
    // useState
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, SetFilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState([]);
    // useEffect

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=23.3556&lng=85.3324&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Shimmer UI 

    return listOfRestaurants.length ===0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <input
                    type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <button onClick={()=>{
                    console.log(searchText);
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    SetFilteredListOfRestaurants(filteredList);
                }}>
                    Search
                </button>
                <button className="filter-btn" 
                onClick = {()=>{
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.avgRating >= 4.5
                    );
                    SetFilteredListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )
            )
            }
            </div>
        </div>
    );
};
export default Body;