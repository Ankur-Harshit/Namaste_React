import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName, setbtnName] =useState("login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store)=> store.cart.items)
    return(
            <div className="flex justify-between bg-pink-100 shadow-lg">
                <div className="logo-container">
                    <img className="w-[125px]" src={LOGO_URL}
                    />
                </div>
                <div className="flex items-center">
                    <ul className="flex m-4 p-4">
                        <li className="px-4">Status: {onlineStatus===true?"🟢":"🔴"}</li>
                        <li><Link to="/" className="px-4">Home</Link></li>
                        <li><Link to="/about" className="px-4">About Us</Link></li>
                        <li><Link to="/contact" className="px-4">Contact Us</Link></li>
                        <li className="px-4 font-bold"><Link to="/cart">Cart({cartItems.length})</Link></li>
                        <li><Link to="/instamart" className="px-4">Instamart</Link></li>
                        <button className="px-4" onClick={()=>{
                            btnName==="login"?setbtnName("logout"):setbtnName("login");
                        }}>
                            {btnName}
                        </button>
                    </ul>
                </div>
            </div>
    );
};

export default Header;