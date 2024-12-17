import { useContext, useEffect, useState } from "react";
import { ColorRing} from "react-loader-spinner";
import {getcategory} from '../Contexts/getcategory'
import { cartcontext } from "../Contexts/cartcontext";
function Cardproduct(props){

    const {cart,setcart} = useContext(cartcontext);
    const {currentcat,setcurrentcat} = useContext(getcategory);
    const [Loading, setLoading] = useState(true);
    const [isHover,setHover] = useState(false);
    const [fullscr,setfullscr] = useState(false);
    const [onHots,setHots] = useState(false);


    useEffect(()=>{
        currentcat == "hotdeals" ? setHots(true) : setHots(false);
    },[currentcat]) //To Ccheck If we are in the Hotdeals Category
    
    function addfav(e){
        e.innerText == "cardio_load" ? e.innerText="favorite" : e.innerText="cardio_load" ;
    }

      //adding Item to cart Function
    function constItem(ele){ 
       let imgsrc = ele.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].src;
       let name = ele.parentElement.parentElement.childNodes[0].innerText;
       let price = ele.parentElement.parentElement.childNodes[2].childNodes[0].childNodes[1].childNodes[0].data;
       const objnow = {imgsrc,name,price};
       let found = false;

        // To check If item is already Available in Cart
       if(cart.length > 0) {
                if(cart.some(item => item.name == objnow.name)){found = true;}

                if(!found){
                    setcart(prev => [...prev,objnow]);
                    };

            }        
        else{
            setcart(prev => [...prev,objnow])
            }
       
    }

    return(<div className={`${onHots ? "hotproduct": "cartproduct"} flex  items-center h-max p-1 relative`} >
                {
                    Loading &&(
                        <div className="loader">
                           <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['red','rgb(220 38 38)','maroon','tomato','pink']}
                                />
                        </div>
                    )
                }

                
                    <span className={`fullImage ${isHover ? "absolute flex" : "hidden"}`}>
                        <img src={props.image} className={`${fullscr ? "block" : "none"}`}/>
                    </span>
                
                <img 
                    src={props.image}
                    onMouseOver={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    onLoad={()=>setLoading(false)}
                    onError={()=>setLoading(true)}
                    style = {{display: Loading ? "none" : "block"}}
                    className="hover:bg-gray-200 hover:cursor-pointer"
                    />

                <span className="flex flex-col">
                    <p className=" name text-black">{props.name}</p>
                    <p className="text-zinc-400 text-xs text-light">{props.desc}</p>

                    { onHots ? <p className="text-green-200 bg-red-800 w-max p-0.5 radius-medium">Friday Special 🔥</p> : <></>}
                    <span className=" grid grid-cols-2 text-red-600 items-center">
                        <p className="flex items-center text-lg font-semibold">&#x20b9;<p>{props.price}</p></p>
                        <span>
                             <span className="text-md material-symbols-rounded cursor-pointer mx-1 w-max float-end" title="Add to Favorites" onClick={(e)=>addfav(e.target)}>favorite</span>
                        </span>
                    </span>

                    <span className="px-1 py-0.5">
                    <button className="bg-red-400 hover:bg-red-500 flex items-center gap-2 py-2 px-3 rounded-md w-max float-end" onClick={(e)=>{constItem(e.target)}}>
                        Add Item<span className="material-symbols-rounded">add_shopping_cart</span>
                    </button>
                    </span>
                </span>
        </div>
        )
}

export default Cardproduct;