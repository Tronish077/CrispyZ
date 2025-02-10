import { useState,useContext, useEffect} from "react";
import { cartcontext } from "../Contexts/cartcontext";
import { totalcontext } from "../Contexts/totalscontext.jsx";
import Cartcard from "./Cartcard.jsx";

function Cartbox(){

    const [selected,setSelect] = useState("p2");
    const {cart} = useContext(cartcontext);
    const [cartEmpty,setCartEmpty] = useState(true); //State for checking if cart is empty
    const [subtotal, setsubtotal] = useState(0);
    const [checkout, setcheckout] = useState(false);

    function bgred(id){
        setSelect(id);
    }

    useEffect(()=>{
        if(cart.length > 0){
            setCartEmpty(false);
            setcheckout(true) }
            else{
                 setCartEmpty(true);
                 setcheckout(false);
            }
    },[cart])

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    };

    return(
        <totalcontext.Provider value={{subtotal,setsubtotal}}>
            <div className="Cartbox">
                <span className="flex text-black text-3xl  items-center  p-2 font-semibold gap-12">
                    Cart-Overview
                    <span className="material-symbols-rounded text-red-600 bg-gray-200 rounded flex p-1">shopping_cart</span>
                </span>

                <hr></hr>
                    
                    
                    <span className="border mt-3 h-96 rounded-lg overflow-scroll">

                    {
                        cartEmpty && (
                            <div className="flex flex-col justify-center items-center h-full">
                                <img 
                                src="https://img.freepik.com/premium-vector/plastic-shopping-basket-store-stock-vector-illustration_110233-4738.jpg"
                                className="h-32">
                                </img>
                                <p className="text-black text-xl m-2">Your Cart is Empty</p>
                                <p className="text-zinc-400 text-sm text-center font-light">Fill Up your cart with All The Meals <br/> Your Craving For Today !!</p>
                            </div>
                        )
                    }

                        {      cart.map((item,index)=>{
                                return(
                                <Cartcard key={index} image={item.imgsrc} name={item.name} price={item.price}/>
                                )
                            })
                        }
                    </span>
                    

                <span className="bg-gray-100 mt-4 rounded p-2">
                    <table className="text-black breakdown">
                        <tbody>
                        <tr>
                            <td>Cart Items</td>
                            <td className="text-right">{cart.length}</td>
                        </tr>

                        <tr>
                            <td>Sub Total</td>
                            <td className="text-right">&#x20b9; {subtotal}</td>
                        </tr>

                        <tr>
                            <td>Tax(18.5%)</td>
                            <td className="text-right">&#x20b9; {Math.round(subtotal * 0.185)}</td>
                        </tr>
                        </tbody>
                    </table>

                    <hr className="linebreak"></hr>

                    <table className="text-black font-semibold w-full">
                        <tbody>
                        <tr>
                            <td className="text-xl">Total Amount</td>
                            <td className="text-right text-xl">{formatCurrency(Math.round(subtotal * 0.185) + subtotal)}</td>
                        </tr>
                        </tbody>
                    </table>
                </span>

                <span className="flex gap-4 my-2.5 mx-auto">
                    {["p1","p2","p3"].map((id,index)=>{

                        const obj = [{
                            icon:"payments", title:"Cash"
                        },{icon:"credit_card", title:"Card"},
                        {icon:"qr_code_2",title:"UPI"}]

                        const highlight = selected === id;

                        return(
                            <span key={id} className="flex flex-col items-center">
                                <span className={`material-symbols-rounded text-3xl hover:bg-red-100 pmeths ${highlight ? "text-white bg-red-600" : "text-black"}`} onClick={()=>bgred(id)}>{obj[index].icon}</span>
                                <p className="text-black">{obj[index].title}</p>
                            </span>
                        )

                    })}
                </span>

                <button className={`flex text-gray-300 border-2 justify-center items-center gap-4 h-16 rounded-md text-lg ${checkout ? "bg-red-600 text-zinc-100 border-0": "cursor-not-allowed"} `}  disabled={!checkout}>
                    <span className="material-symbols-rounded">shopping_cart_checkout</span>
                    Process To CheckOut
                </button>
                
            </div>
        </totalcontext.Provider>)
}

export default Cartbox;