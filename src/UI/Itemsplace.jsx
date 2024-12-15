import { useContext, useEffect, useState } from "react";
import Cardproduct from "../Components/Cardproduct";
import { apiinfo } from "../Contexts/apiinfo";


function Itemsplace(){
    
    const [items,setItems] = useState([]);  
    const {apidata} = useContext(apiinfo);

    useEffect(() => {
        if (Array.isArray(apidata)) {
            setItems(apidata);
        }
        
    }, [apidata]);


    return(<div className="Itemsplace flex  gap-6">
                {
                    items.map((item)=>{
                        return(
                            <Cardproduct key={item.id} name={item.name} price={item.price} image={item.imagesrc}/>
                        )
                    })
                }
        </div>)
}


export default Itemsplace;