import { Link, useNavigate } from "react-router-dom"

 export default function Header(){

   const navigate = useNavigate();
    return (
        
        <header className='w-full h-[80px] shadow-2xl flex'>
                <div>
                    <img onClick={ ()=> {navigate("/")}} src="logo.jpg" alt="logo"  className="w-[80px] h-[80px] object-cover cursor-pointer "/>
                </div>
                    
                <div className="w-[calc(100%-160px)] h-full flex items-center justify-center gap-10">
                     <Link to={"/"}><span className=" font-bold cursor-pointer bg-gray-900 rounded-2xl text-white p-2">Home</span></Link>
                     <Link to={"/products"}><span className=" font-bold cursor-pointer  bg-gray-900 rounded-2xl text-white p-2">Produts</span></Link>
                     <Link to={"/about"}><span className=" font-bold cursor-pointer  bg-gray-900 rounded-2xl text-white p-2">About</span></Link>
                     <Link to={"/contacts"}><span className=" font-bold cursor-pointer  bg-gray-900 rounded-2xl text-white p-2">Contacts</span></Link>

                </div>

                <div className="w-[80px] bg-blue-900">

                </div>
          </header>   
               
          

            

          
        
    )

 }
