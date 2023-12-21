import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";


const Menu = () => {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenus(data))
        
    },[])
    console.log(menus)
    return (
        <div>.
         <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">Menu</h1>
        {
            menus.map(menu=><Card></Card>)
        }
         </div>
        </div>
    );
};

export default Menu;