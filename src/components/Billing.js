const Billing = ({items})=>{
    let total = 0;

    items.forEach((item) => {
      total +=
        (((item.card ? item.card.info.price : item.dish.info.price) ||
        (item.card ? item.card.info.finalPrice : item.dish.info.finalPrice))*item.quantity)/100;
    });
    return(
        <div className="w-6/12 m-auto">
            {items.map((item)=>(
                <div className="font-medium" key={item.card ? item.card.info.id : item.dish.info.id}>
                    {(item.card?item.card.info.name:item.dish.info.name)} X {item.quantity} : ₹ {(((item.card ? item.card.info.price : item.dish.info.price) ||
                    (item.card ? item.card.info.finalPrice : item.dish.info.finalPrice))*item.quantity)/100}
                </div>
            ))}
            <div className="font-bold my-4 border-gray-500 border-t-2">
                Total: {total}
            </div>
        </div>
    )
}
export default Billing;