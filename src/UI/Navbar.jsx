import logo from '../media/logo.png'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="fixed flex items-center w-screen p-4  grid grid-cols-4 gap-2">
            <span className="flex items-center gap-2">
                <img src={logo} className='h-8 p-0'/>
                <p style={{fontFamily:"playball"}} className='text-3xl font-bold text-white'>Crispy Z</p>
            </span>

            <span className="flex gap-20 navs col-span-2">
                <Link to="/store/Products" className="text-white text-lg">Store</Link>
                <Link to="/store/Products" className="text-white text-lg ">Delivery</Link>
                <Link className="text-white text-lg ">Blogs</Link>
                <Link className="text-white text-lg ">About</Link>
                <Link className="text-white text-lg ">FAQ'S</Link>
            </span>

            <span className="flex gap-2">
            <a  href="https://wa.me/918141138512" className="flex items-center gap-2 callbt ">
                <span className="material-symbols-rounded text-3xl  callicn text-black">deskphone</span>
                <p className='text-white'>+91 (814)-113-8512</p>
            </a>
            <button className='font-normal flex btsrc text-sm gap-1 bg-white text-black '>
                <span className="material-symbols-rounded text-base">mystery</span>
                Search Products
            </button>
            </span>
        </div>
    )
}

export default Navbar;