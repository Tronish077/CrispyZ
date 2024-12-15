import { useContext, useEffect, useState } from "react";
import Cardproduct from "../Components/Cardproduct";
import { MutatingDots} from "react-loader-spinner";
import { apiinfo } from "../Contexts/apiinfo";


function Itemsplace(){
    
    const [items,setItems] = useState([]);  
    const {apidata} = useContext(apiinfo);

    useEffect(() => {
        if (Array.isArray(apidata)) {
            setItems(apidata);
        }
        
    }, [apidata]);

    if(apidata.length > 2){

                return(<div className="Itemsplace flex  gap-6">
                            { 
                                items.map((item)=>{
                                    return(
                                        <Cardproduct key={item.id} name={item.name} price={item.price} image={item.imagesrc}/>
                                    )
                                })
                            }
                        
                    </div>)
            }else{

        return(<div className="Itemsplace flex flex-col items-center justify-center  gap-6">
                                <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="rgb(220 38 38)"
                    secondaryColor="black"
                    radius="11.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />

                    <p className="text-red-600 text-lg">Fetching Products . . .</p>
        </div>)
    }}


export default Itemsplace;