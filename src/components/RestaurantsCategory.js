import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const handleClick = ()=>{
    setShowIndex();
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-200 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data?.title}</span>
          <span> ˅ </span>
        </div>
        {showItems && <ItemList items={data.itemCards?data.itemCards:data.carousel}/>}
      </div>
    </div>
  );
};
export default RestaurantCategory;
