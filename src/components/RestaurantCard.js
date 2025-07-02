import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-card"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.locality}</h4>
      <h4>{resData.info.avgRating} ⭐</h4>
      <h4>{resData.info.sla.deliveryTime} minutes 🚚</h4>
    </div>
  );
};

export default RestaurantCard;
