import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidemenu from "../UI/Sidemenu";
import Cartbox from "./Cartbox";
import { cartcontext } from "../Contexts/cartcontext";


function Store(){

    const [cart,setcart] = useState([]);
   

   return(
        <div className="flex">
            <cartcontext.Provider value={{cart,setcart}}>
                <Sidemenu/>
                <Outlet/>
                <Cartbox/>
            </cartcontext.Provider>
        </div>)
}

export default Store;