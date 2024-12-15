import { useContext, useEffect, useState } from "react";
import { ColorRing} from "react-loader-spinner";
import { cartcontext } from "../Contexts/cartcontext";
function Cardproduct(props){

    const {cart,setcart} = useContext(cartcontext);
    const [Loading, setLoading] = useState(true);
    
    function addfav(e){
        e.innerText == "cardio_load" ? e.innerText="favorite" : e.innerText="cardio_load" ;
    }

      //adding Item to cart Function
    function constItem(ele){ 
       let imgsrc = ele.parentElement.childNodes[0].src;
       let name = ele.parentElement.childNodes[1].innerText;
       let price = ele.parentElement.childNodes[2].childNodes[0].childNodes[1].childNodes[0].data;
       const objnow = {imgsrc,name,price};
       let found = false;

        // To check If item is already Available in Cart
       if(cart.length > 0) {
                if(cart.some(item => item.name == objnow.name)){found = true;}

                if(!found){setcart(prev => [...prev,objnow])};

            }        
        else{
            setcart(prev => [...prev,objnow])
            }
       
    }

    return(<div className="cartproduct flex flex-col justify-center h-max  p-2">
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
                
                <img 
                    src={props.image}
                    onLoad={()=>setLoading(false)}
                    onError={()=>setLoading(true)}
                    style = {{display: Loading ? "none" : "block"}}
                    />
                <p className="text-black">{props.name}</p>
                <span className="flex gap-20 text-red-600 items-center my-0.5">
                    <p className="flex items-center text-lg font-semibold">&#x20b9;<p>{props.price}</p></p>
                    <span className=" text-md material-symbols-rounded cursor-pointer" title="Add to Favorites" onClick={(e)=>addfav(e.target)}>favorite</span>
                </span>
                <button className="bg-red-400 hover:bg-red-500 flex items-center gap-2 py-2 px-3 rounded-md" onClick={(e)=>{constItem(e.target)}}>
                    <span className="material-symbols-rounded">add_shopping_cart</span>
                    Add To Cart
                </button>
        </div>
        )
}

export default Cardproduct;