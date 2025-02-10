import { useContext, useState } from 'react';
import {getcategory} from '../Contexts/getcategory'
import logo from '../media/logo.png'
import { Link } from 'react-router-dom';

function Sidemenu(){

    const [selected,setSelected] = useState("l1");
    const {setcurrentcat} = useContext(getcategory);

    function makeHighlight(id){
        setSelected(id)
        setcurrentcat('all')
    }

    return(<div className="sidemenu">
                <span className="flex items-center gap-2 bg-red-600 px-4 py-2">
                    <img src={logo} className='h-8 p-0'/>
                    <Link to="/" style={{fontFamily:"playball"}} className='text-3xl font-bold text-whitew'>Crispy Z</Link>
                </span>

                <span className="flex flex-col mt-4 p-1">
                    {["l1","l2","l3","l4","l5","l6","l7","l8","l9"].map((id,index)=>{

                        const obj = [
                            {icon:"flatware",name:"Menu",going:"Products"},
                            {icon:"table_restaurant",name:"Table Services",going:"Tables"},
                            {icon:"book_5",name:"Reservations",going:"Reserves"},
                            {icon:"favorite",name:"Favorites",going:""},
                            {icon:"moped",name:"Delivery",going:""},
                            {icon:"share_location",name:"Addresses",going:""},
                            {icon:"request_quote",name:"Payments",going:""},
                            {icon:"deployed_code_history",name:"Order History",going:""},
                            {icon:"help",name:"Support",going:""}
                        ]

                        const highlight = selected === id;

                        return(
                            
                                <Link to={obj[index].going} key={id} id={id} className={`flex ${highlight ? "bg-red-600 text-white" : "text-black"} items-center gap-2 p-3 m-1 hover:bg-red-100 sidelinks`} onClick={()=>makeHighlight(id)}>
                                    <span className={`material-symbols-rounded ${highlight ? "text-white":"text-red-600" }`} key={id}>{obj[index].icon}</span>
                                    <span>{obj[index].name}</span>
                                </Link>
                        )
                    })}
                </span>

                    <hr></hr>

                <span>
                    <Link className="flex bg-gray-200 text-black gap-2 p-3.5 m-2 hover:bg-red-100 sidelinks">
                        <span className={`material-symbols-rounded text-black`}>settings</span>
                        <span>Account Settings</span>
                    </Link>
                        
                    <Link className="flex bg-gray-200 text-black gap-2 p-3.5 m-2 hover:bg-red-100 sidelinks">
                        <span className={`material-symbols-rounded text-black`}>Logout</span>
                        <span>Logout</span>
                    </Link>
                </span>
           </div>)
}

export default Sidemenu;