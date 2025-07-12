import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
    const [btnName, setbtnName] =useState("login");
    return(
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}
                    />
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/" className="home-tab">Home</Link></li>
                        <li><Link to="/about" className="about-tab">About Us</Link></li>
                        <li><Link to="/contact" className="contact-tab">Contact Us</Link></li>
                        <li className="cart-tab">Cart</li>
                        <button className="login" onClick={()=>{
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