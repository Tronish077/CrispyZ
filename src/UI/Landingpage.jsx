import { Link } from "react-router-dom";

function Landingpage(){

    const styles = {
                    height:"100vh",
                    width:"100%",
                    }

    return(<div className="landingpage grid grid-cols-2" style={styles}>
            <div className="flex flex-col px-12 h-full ">
                <span className="mt-28">
                    <h1  style={{fontFamily:"potta one",textShadow:"2px 2px 4px rgba(0,0,0,0.5)",fontSize:"100px"}}>
                        Grilled Beef Burger's
                    </h1>
                </span>
                <p className="mt-6 font-semibold">
                    Special Deal's on <big>Tuesday</big> and <big>Thursday</big> every Week
                </p>

                <p className="text-4xl flex font-black pt-3">Buy 2 Get Two More For<p className="mx-1 px-1 free">Free !!</p></p>

                <Link to="/store/Products" className="orderslanding flex justify-center">
                    PLACE ORDERS
                </Link>
            </div>

            <div>
                <img className="mt-16" src="https://static.vecteezy.com/system/resources/previews/049/951/232/non_2x/tasty-stacked-burgers-with-fresh-toppings-isolated-transparent-png.png" alt="" />
            </div>

    </div>)
};

export default Landingpage;