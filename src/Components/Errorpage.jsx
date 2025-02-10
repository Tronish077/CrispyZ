import { Link } from "react-router-dom";

function Errorpage(){
    return(<div className="flex flex-col justify-center items-center h-screen bg-black">
        <h1 className="text-3xl text-red-300">404 Not Found 🥴😭🥹</h1>
        <p>
         <Link to="/">
            Back Home
        </Link>
        </p>
    </div>)
}

export default Errorpage;