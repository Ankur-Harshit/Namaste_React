import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  };


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card ? item.card.info.id : item.dish.info.id}
          className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>
                {item.card ? item.card.info.name : item.dish.info.name}
              </span>
              <span>
                : ₹
                {((item.card ? item.card.info.price : item.dish.info.price) ||
                  (item.card
                    ? item.card.info.finalPrice
                    : item.dish.info.finalPrice)) / 100}
              </span>
            </div>
            <p className="text-xs">
              {item.card
                ? item.card.info.description
                : item.dish.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
          <div className="absolute">
            <button className="hover:bg-gray-400 p-2 bg-white shadow-lg m-auto rounded-lg cursor-pointer"
            onClick={()=>handleAddItem(item)}> Add +</button>
          </div>
            <img
              src={
                CDN_URL +
                (item.card ? item.card.info.imageId : item.dish.info.imageId)
              }
            className="w-full"/>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
