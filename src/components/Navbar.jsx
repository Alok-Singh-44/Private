import React from "react";
import {Link, NavLink} from 'react-router-dom'

function Navbar(){
    return(
        <>
        {/* Navbar goes here */}


        {/* <div className="container  h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center " > */}
        <div className=" px-6 py-4 h-[10vh] bg-gray-700 w-[100vw] flex items-center justify-between sticky top-0 z-50 text-white" >
                    <div className="logo">
                        <img className="w-25" src="./logo.jpg" alt="" />
                    </div>
                    <div >
                        <ul className="options hidden md:flex font-semibold">
                            <li className="mx-[10px] cursor-pointer"><a href="#home" className="tabs">Home</a></li>
                            <li className="mx-[10px] cursor-pointer"><a href="#about" className="tabs">About us</a></li>
                            <li className="mx-[10px] cursor-pointer"><a href="#pg" className="tabs">Our PGs</a></li>
                            <li className="mx-[10px] cursor-pointer"><a href="#contact" className="tabs">Contact</a></li>
                            {/* <li className="mx-[10px] cursor-pointer"><a href="#projects" className="tabs">List My PG</a></li> */}
                        </ul>
                    </div>

                    <button className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-xl font-bold cursor-pointer">Sign up/Login</button>
                    <div className="md:hidden">
                        <a className="text-4xl" href="#">&#8801;</a>
                    </div>
        </div>

        {/* <div className="bg-indigo-200 w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50 text-white" >
            <div className="logo">
               <h1 className="text-2xl font-bold text-indigo-700">Eazy<span>Hut</span></h1>
                <img className="w-25" src="./logo.jpg" alt="" />
            </div>
            <div >
                <ul className="options hidden md:flex font-semibold">
                    <li className="mx-[10px] cursor-pointer"><a href="#home" className="tabs">Home</a></li>
                    <li className="mx-[10px] cursor-pointer"><a href="#about" className="tabs">About us</a></li>
                    <li className="mx-[10px] cursor-pointer"><a href="#skill" className="tabs">Skills</a></li>
                    <li className="mx-[10px] cursor-pointer"><a href="#projects" className="tabs">Projects</a></li>
                    <li className="mx-[10px] cursor-pointer"><a href="#contact" className="tabs">Contact</a></li>
                </ul>
            </div>

            <button className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-xl font-bold cursor-pointer">Sign up/Login</button>
            <div className="md:hidden">
                <a className="text-4xl" href="#">&#8801;</a>
            </div>
        </div> */}
    </>
    )
}

export default Navbar;