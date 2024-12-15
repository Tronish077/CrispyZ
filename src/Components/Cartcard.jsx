import { cartcontext } from "../Contexts/cartcontext";
import { useContext, useEffect, useState } from "react";
import { totalcontext } from "../Contexts/totalscontext";

function Cartcard(props) {
    const { cart, setcart } = useContext(cartcontext);
    const [count, setcount] = useState(1);
    const { subtotal, setsubtotal } = useContext(totalcontext);

    // Calculate total for this item
    const Total = props.price * count;

    useEffect(() => {
        // Initialize subtotal with the current item's total
        setsubtotal(prevSubtotal => prevSubtotal + Total);
      
    }, []);

    useEffect(()=>{
        const itemIncart = cart.find(item => item.name === props.name);
        if(!itemIncart){
            setcount(1);
        }
    },[cart,props.name])

    function increment() {
        setcount(prevCount => {
            const newCount = prevCount + 1;
            setsubtotal(prevSubtotal => prevSubtotal + Number(props.price));
            return newCount;
        });
    }

    function decrement() {
        if (count > 1) {
            setcount(prevCount => {
                const newCount = prevCount - 1;
                setsubtotal(prevSubtotal => prevSubtotal - Number(props.price));
                return newCount;
            });
        }
    }

    function remove(ele) {
        let name = ele.parentElement.parentElement.childNodes[0].innerText;
        const itemIncart = cart.find(item => item.name === props.name);
        if(!itemIncart){
            const itemTotal = itemIncart.price * count;
            setsubtotal(prevSubtotal => prevSubtotal - itemTotal);
        }
        setsubtotal(prevSubtotal => prevSubtotal - Total); // Correctly subtract total price for the item
        setcart(cart.filter(item => item.name !== name)); // Remove item from cart
        setcount(1);
    }   

    return (
        <div className="p-2 grid grid-cols-3">
            <img className="cartimg" src={props.image} />
            <span className="col-span-2 flex flex-col">
                <p className="text-black p-1">{props.name}</p>
                <span className="flex gap-12 mt-1">
                    <p className="flex items-center text-red-600 text-lg">&#x20b9;<p className="px-1">{props.price}</p></p>
                    <span className="flex h-7">
                        <input type="number" className="w-12 rounded bg-gray-200 text-black text-center" value={count} readOnly />
                        <button className="bg-red-600 text-white px-3" onClick={()=>increment()}>+</button>
                        <button className="bg-red-600 text-white px-3 " onClick={()=>decrement()}>-</button>
                    </span>
                </span>

                <span className="flex gap-12 text-center mt-0.5">
                <span className="material-symbols-rounded bg-gray-200  w-max cursor-pointer text-black rounded p-0.5 hover:text-red-600 mx-4" title="Remove Item" onClick={(e)=>{remove(e.target)}}>remove_shopping_cart</span>
                <h1 className="flex font-regular py-2 text-sm text-gray-500">Amount: &#x20b9;<p className="text-black">{Total}</p></h1>
                </span>
            </span>
            </div>
        )
}


export default Cartcard;