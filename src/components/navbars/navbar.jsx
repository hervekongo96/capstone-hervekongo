import { useState } from 'react'
import Primarybutton from '../buttons/primarybutton';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () =>{
        setisClick(!isClick)
    }
  return (
    <nav className="bg-white">
        <div className="max-w-full">
            <div className="flex items-center justify-between h-20">
                <div className="hidden md:block">
                    <div className="flex items-center space-x-4">
                        <Link to={"https://kadea.academy/"} className="text-black font-bold rounded-lg p-2">Kadea Academy</Link>
                        <Link to={"https://kadea.co/"} className="text-black font-bold rounded-lg p-2">Kadea Software</Link>
                    </div>
                </div>
                <div className="flex items-center"> 
                    <div className="flex-shrink-0">
                        <a className="text-black font-bold">
                            The wall website
                        </a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex-shrink-0">
                        <Link to={'/sign-in'}>
                            <Primarybutton value={"Login"} className={"bg-black text-white px-5 py-1 mr-2 font-semibold tracking-widest text-lg rounded-full cursor-pointer"} />
                        </Link>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                        {isClick ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ):(
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to={"https://kadea.academy/"} className="text-black block hover:bg-gray-400 rounded-lg p-2">Kadea Academy</Link>
                        <Link to={"https://kadea.co/" } className="text-black block hover:bg-gray-400 rounded-lg p-2">Kadea Software</Link>
                        <Link to={'/sign-in'} className="text-black block hover:bg-gray-400 rounded-lg p-2">Login</Link>
                        <Link to={'/sign-up'} className="text-black block hover:bg-gray-400 rounded-lg p-2">Sing Up</Link>
                    </div>
                </div>
            )}
    </nav>
  )
}

export default Navbar