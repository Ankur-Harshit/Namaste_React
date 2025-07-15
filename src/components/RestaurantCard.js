import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card m-2 p-4 w-[205px] bg-gray-200 hover:bg-gray-400 rounded-lg">
      <img
        className="res-logo rounded-xl"
        alt="res-card"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="text-lg font-bold py-4">{resData.info.name}</h3>
      <h4>{resData.info.locality}</h4>
      <h4>{resData.info.avgRating} ⭐</h4>
      <h4>{resData.info.sla.deliveryTime} minutes 🚚</h4>
    </div>
  );
};

// higher order component

export const isVegLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute m-2 p-2 bg-green-600 text-white rounded-b-xl">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}


export default RestaurantCard;
