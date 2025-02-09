import { useState,useContext} from "react";
import { getcategory } from "../Contexts/getcategory";
import { apiinfo } from "../Contexts/apiinfo";
import { dummyapi } from "../Contexts/apiinfo";

function Categories() {
    const { apidata, setapidata } = useContext(apiinfo);
    const {dummydata} = useContext(dummyapi);
    const [selected, setSelected] = useState("all");
    
    const [allProducts, setAllProducts] = useState([])

    const {setcurrentcat} = useContext(getcategory); //get the categories contextapi

    function bgred(id,category) {
        setSelected(id);
        setcurrentcat(category); // sets the category context to the selected category     
    }

    function filtercats(any) {
        if (any === "all") {
            setapidata(dummydata);
        }
         else if(apidata){
            setAllProducts(()=>[])
            allProducts.push(...dummydata)
            const filtered  = allProducts.filter(item => item.category.includes(any))
            setapidata(filtered);
        }
    }


    return (
        <div className="flex gap-2 mt-4">
            {["all", "breakfast", "veg", "creams", "burgers", "lunch", "combos", "hotdeals"].map((id, index) => {
                const obj = [
                    { icon: "grid_view", title: "All", subtitle: "All Products", category: "all" },
                    { icon: "egg_alt", title: "Breakfast", subtitle: "Morning Treats", category: "breakfast" },
                    { icon: "eco", title: "Vegetarian", subtitle: "VegMeals", category: "veg" },
                    { icon: "icecream", title: "Creams'n Drinks", subtitle: "CreamyTreats", category: "creams" },
                    { icon: "lunch_dining", title: "Burgers", subtitle: "BurgerMeals", category: "burgers" },
                    { icon: "food_bank", title: "Lunch", subtitle: "AllLunchDinner", category: "lunch" },
                    { icon: "fastfood", title: "Combo's", subtitle: "ComboMeals", category: "combos" },
                    { icon: "local_fire_department", title: "Crazy Dealz", subtitle: "PromoMeals", category: "hotdeals" }
                ];

                const highlight = selected === id;

                return (
                    <span className={`w-26 px-2 p-1 rounded hover:bg-red-100 ease-in duration-300 cursor-pointer ${highlight ? "bg-red-600 text-white" : "bg-white text-black"}`} key={id} category = {obj[index].category} onClick={() => { bgred(id,obj[index].category);filtercats(obj[index].category) }}>
                        <span className={`material-symbols-rounded text-2xl ${highlight ? "text-white" : "text-red-600"}`}>{obj[index].icon}</span>
                        <p>{obj[index].title}</p>
                        <p className={`text-xs ${highlight ? "text-white" : "text-gray-500"} font-medium`}>{obj[index].subtitle}</p>
                    </span>
                );
            })}
        </div>
    );
}

export default Categories;