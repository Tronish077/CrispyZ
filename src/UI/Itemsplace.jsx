import { useContext, useEffect, useState } from "react";
import Cardproduct from "../Components/Cardproduct";
import noItems from '../media/images/dropvector.png'
import { MutatingDots} from "react-loader-spinner";
import { apiinfo } from "../Contexts/apiinfo";
import { getcategory } from "../Contexts/getcategory";


function Itemsplace(){
    
    const [items,setItems] = useState([]);  
    const {apidata} = useContext(apiinfo);
    const [isZero,setIszero] = useState(true);
    const {currentcat} = useContext(getcategory);


    useEffect(() => {
        
        if (Array.isArray(apidata)) {
            setItems(apidata);
            apidata.length === 0 ? setIszero(true) : setIszero(false);
        }
    }, [apidata]);

                //Load a vector if No Crazy deal meals available
            if(isZero && currentcat == "hotdeals")
               {
                return(<div className="Itemsplace flex flex-col items-center justify-center  gap-6">
                         <h2 className="text-black text-2xl">Nothing To see Here Yet !!!</h2>
                        <img src={noItems} className="h-80"/>
                    </div>)
            }

                //Render all Items except hotdeals
            else if(apidata.length > 0){
                return(<div className="Itemsplace content-start">
                        
                            { 
                                items.map((item)=>{

                                        //Conditional Render Based On Categories
                                    if(currentcat != "hotdeals"){

                                        if(item.category !== "hotdeals"){
                                            return(
                                                <Cardproduct key={item.id} name={item.name} price={item.price} image={item.imagesrc} desc={item.desc}/>
                                            )
                                        }

                                        }else{
                                        return(
                                            <Cardproduct key={item.id} name={item.name} price={item.price} image={item.imagesrc} desc={item.desc}/>
                                        )
                                    }
                                    
                                }  

                        )}

                    </div>
            )}

                //Use Loader Screen On Items Delay
            else{

        return(<div className="Itemsplace flex flex-col items-center justify-center">
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