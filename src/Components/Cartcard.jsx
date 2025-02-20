import { cartcontext } from "../Contexts/cartcontext";
import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { totalcontext } from "../Contexts/totalscontext";

function Cartcard(props) {
    const { cart, setcart} = useContext(cartcontext);
    const [count, setcount] = useState(1);
    const {setsubtotal} = useContext(totalcontext);
    // const [foodCart,setFoodCart] = useState([...cart])

    // Calculate total for this item
    let Total = props.price * count;

    useEffect(() => {
        // Initialize subtotal with the current item's total
        setsubtotal(prev => prev + parseInt(props.price));
    }, []);

    function increment(btn){
        const box = btn.parentElement.childNodes[0].value
        const boxVal = parseInt(box) + 1
        setcount(boxVal)
        setsubtotal(prevSubtotal => prevSubtotal + parseInt(props.price));
    }

    function decrement(btn) {
        const box = btn.parentElement.childNodes[0].value;
        const boxVal = parseInt(box);
    
        if (boxVal > 1) {
            setcount(prevCount => {
                
                const newCount = prevCount - 1;
                setsubtotal(prevSubtotal => prevSubtotal - props.price);
                return newCount;
            });
        }
    }

    function remove(ele){   
            setsubtotal(prevSubtotal => prevSubtotal - (count * props.price))
            const filtered = cart.filter((child)=> child.name !== props.name)
            setcart(filtered)    
            setcount(init => init)
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
                        <button className="bg-red-600 text-white px-3" onClick={(e)=>increment(e.target)}>+</button>
                        <button className="bg-red-600 text-white px-3 " onClick={(e)=>decrement(e.target)}>-</button>
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


Cartcard.prototypes = {
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default Cartcard;