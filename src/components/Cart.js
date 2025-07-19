import { useSelector } from "react-redux";
import CartCheckout from "./CartCheckout";
import Billing from "./Billing";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    if(cartItems.length===0){
        return(
            <div className="text-center font-bold text-2xl m-4 p-4">
                <h2 className="m-4">Looks Like The Cart is Empty!</h2>
                <img className="w-3/12 m-auto" src="https://t4.ftcdn.net/jpg/02/66/72/41/240_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="cat"></img>
            </div>
        )
    }
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl m-2 p-2">Cart</h1>
            <button className="m-2 p-2 text-sm font-bold cursor-pointer bg-black text-red-500 rounded-xl "
            onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto p-4">
                <CartCheckout items={cartItems} />
            </div>
            <div>
                <Billing items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;