import { useState,useContext } from "react";
import { apiinfo,dummyapi } from "../Contexts/apiinfo";

function Searchcomp(){
    const [allProducts,setAllProducts] = useState([]);
    const {setapidata } = useContext(apiinfo);
    const {dummydata} = useContext(dummyapi);

    function searchProduct(event){
        event.preventDefault();
        const srcbox = document.getElementById('srcbox');
        setAllProducts(()=>[]);
        allProducts.push(...dummydata);
        const filtered = allProducts.filter(item => item.name.toLowerCase().includes(srcbox.value.toLowerCase()));
        setapidata(filtered);
    }
        
    return(<form className="w-full flex gap-4 mx-auto" id="form" onSubmit={searchProduct}>
                <button className="text-black bg-white p-1 px-2 rounded flex items-center shadow srcbtn">
                    <span className="material-symbols-rounded">search</span>
                </button>

                <input type="search" id="srcbox"  className="srcbox shadow" placeholder="Search products . . ."/>

                <button onClick={()=>window.location.reload()} className="text-white bg-black p-1 px-2 rounded flex items-center shadow">
                    <span className="material-symbols-rounded">refresh</span>
                </button>
        </form>)
}

export default Searchcomp;