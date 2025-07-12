import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [menuList, setMenuList] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setMenuList(json.data);
    }
    return menuList;
}
export default useRestaurantMenu;