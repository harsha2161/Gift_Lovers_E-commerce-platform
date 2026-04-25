import { useState } from "react";
import { FaListOl, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogInOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"
import { IoMdClose } from "react-icons/io";

 export default function Header(){

    const [sideDrawerOpend, setSideDrawerOpen] = useState(false)
    const navigate = useNavigate();
    return (
        
        <header className="w-full h-[80px] shadow-2xl flex  justify-center">
                <div>
                    <img onClick={ ()=> {navigate("/")}} src="/logo.jpg" alt="logo"  className="w-[80px] h-[80px] object-cover cursor-pointer "/>
                </div>
                <GiHamburgerMenu className="my-6 mx-5 flex md:hidden absolute left-2 text-3xl" onClick={() =>{setSideDrawerOpen(true)}} />

                    
                <div className="hidden md:flex w-[calc(100%-160px)] h-full flex items-center justify-center gap-10 ">
                     <Link to={"/"}><span className=" font-bold cursor-pointer bg-gray-900 rounded-2xl text-white p-2">Home</span></Link>
                     <Link to={"/products"}><span className=" font-bold cursor-pointer  bg-gray-900 rounded-2xl text-white p-2">Produts</span></Link>
                     <Link to={"/about"}><span className=" font-bold cursor-pointer  bg-gray-900 rounded-2xl text-white p-2">About</span></Link>
                     <Link to={"/contacts"}><span className=" font-bold cursor-pointer  bg-gray-900 rounded-2xl text-white p-2">Contacts</span></Link>

                </div>
        
                <div className="w-[80px] flex justify-center items-center">
                    <Link to="/cart" className="">
                        <FaShoppingCart className="hidden md:flex"/>
                    </Link>

                    <Link to="/login" className="p-2">
                       <IoLogInOutline className="hidden md:flex"/>
                    </Link>
                </div>

                {
                    sideDrawerOpend&&
                    <div className="fixed h-screen w-full bg-[#00000099] flex md:hidden">
                        <div className="h-screen w-[320px] bg-white flex justify-cener flex-col">    

                                <div className="w-full h-[80px] shadow-2xl flex justify-center items-center gap-40 ">
                                    <IoMdClose  className="text-4xl" onClick={() =>{setSideDrawerOpen(false)}}/>
                                    
                                    <img src="/logo.jpg" alt="logo"  className="w-[80px] h-[80px] object-cover cursor-pointer "/>
                                </div>

                                <div className="w-full h-[calc(100%-80px)] bg-accent flex flex-col items-center gap-2">
                                    <a href="/" className="text-[20px] font-bold mx-2 my-4">Home</a>
                                    <a href="/products" className="text-[20px] font-bold mx-2 my-4">Products</a>
                                    <a href="/about" className="text-[20px] font-bold mx-2 my-4">About</a>
                                    <a href="/contacts" className="text-[20px] font-bold mx-2 my-4">Contacts</a>
                                    <a href="/cart" className="text-[20px] font-bold mx-2 my-4">Cart</a>
                                </div>
                            
                        </div>
                        

                        
                    </div>
                }
          </header>   
               
          

            

          
        
    )

 }
