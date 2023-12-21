import { useEffect, useState } from "react";

import Card from "./Card";


const Menu = () => {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>setMenus(data))
        
    },[])
    
    return (
        <div>.
         <div className="mt-12">
        <h1 className="text-4xl font-bold text-center mb-10">Menu</h1>
       <div className="grid lg:grid-cols-3  gap-5 md:grid-cols-2">
       {
            menus.map(menu=><Card key={menu._id} menu={menu}></Card>)
        }
       </div>
         </div>
        </div>
    );
};

export default Menu;