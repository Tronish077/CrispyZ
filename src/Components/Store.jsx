import { Outlet } from "react-router-dom";
import { useState} from "react";
import Sidemenu from "../UI/Sidemenu";
import Cartbox from "./Cartbox";
import { getcategory } from "../Contexts/getcategory";
import { cartcontext } from "../Contexts/cartcontext";


function Store(){

    const [cart,setcart] = useState([]);

    const [currentcat,setcurrentcat] = useState([]);

   return(
        <div className="flex">
            <getcategory.Provider value={{currentcat,setcurrentcat}}>
            <cartcontext.Provider value={{cart,setcart}}>
                <Sidemenu/>
                <Outlet/>
                <Cartbox/>
            </cartcontext.Provider>
            </getcategory.Provider>
            
        </div>)
}

export default Store;