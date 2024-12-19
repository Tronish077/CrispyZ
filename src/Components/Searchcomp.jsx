import { useContext,useEffect } from "react";
import { apiinfo, dummyapi } from "../Contexts/apiinfo";

function Searchcomp(){

    const {apidata,setapidata} =  useContext(apiinfo);
        
    return(<form className="w-full flex gap-4 mx-auto" id="form">
                <button className="text-black bg-white p-1 px-2 rounded flex items-center shadow">
                    <span className="material-symbols-rounded">search</span>
                </button>

                <input type="search" id="srcbox"  className="srcbox shadow" placeholder="Search products . . ."/>

                <button className="text-black bg-white p-1 px-2 rounded flex items-center shadow">
                    <span className="material-symbols-rounded">refresh</span>
                </button>
        </form>)
}

export default Searchcomp;