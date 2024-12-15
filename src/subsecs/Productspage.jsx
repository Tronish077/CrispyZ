import Searchcomp from "../Components/Searchcomp";
import Categories from "../Components/Categories";
import Itemsplace from "../UI/Itemsplace";
import { useState, useEffect, useContext } from "react";
import { apiinfo } from "../Contexts/apiinfo";
import { dummyapi } from "../Contexts/apiinfo";
function Productspage(){

    const [apidata,setapidata] = useState([]);

    const [dummydata,setdummy] = useState([]);
    

    const fetchdata =  async() => {
        const response = await fetch("http://localhost:4000/Products");
        const data = await response.json();
        setapidata(data);
        setdummy(data)
        };

    useEffect(()=>{
        setapidata(()=>fetchdata());
        setdummy(()=>fetchdata());
    },[])
    
    
    return(<div className="subsecs">  
    <apiinfo.Provider value={{apidata,setapidata}}> 
    <dummyapi.Provider value = {{dummydata,setdummy}}>
        <Searchcomp/>
        <Categories/>
        <Itemsplace/>
    </dummyapi.Provider>
    </apiinfo.Provider>

    </div>);

}

export default Productspage;