import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ClientProductPage from "./client/clientProduct";

export default function Home(){
    console.log("header components is loading......")
    
   return(
    <div className="w-full h-screen flex flex-col items-center">
       
         <Header />
      

        <div className="w-full -h-[calc(100vh-80px)] flex flex-col items-center justify-center">
            <Routes path="/*">
                <Route path="/" element={<h1>Hone</h1>} />
                <Route path="/products" element={<ClientProductPage/>} />
                <Route path="/about" element={<h1>about</h1>} />
                <Route path="/contacts" element={<h1>contscts</h1>} />
                <Route path="/*" element={<h1 className="">404 not found</h1>} />
            </Routes>
        </div>
        
    </div>
    
   )
}