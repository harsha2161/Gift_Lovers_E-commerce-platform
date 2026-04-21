import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ClientProductPage from "./client/clientProduct";
import ProductOverviewPage from "./client/ProductOverview";
import ClientCart from "./client/clientCart";

export default function Home(){
    
   return(
    <div className="w-full h-screen flex flex-col items-center">
       
         <Header />
      
        <div className="w-full h-[calc(100%-80px)] flex flex-col items-center justify-center">
            <Routes path="/*">
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/products" element={<ClientProductPage/>} />
                <Route path="/about" element={<h1>about</h1>} />
                <Route path="/contacts" element={<h1>contscts</h1>} />
                <Route path="/overview/:id" element={<ProductOverviewPage/>} />
                <Route path="/cart" element={<ClientCart/>} />
                <Route path="/*" element={<h1 className="font-bold flex items-center justify-center">404 not found</h1>} />
            </Routes>
        </div>
        
    </div>
    
   )
}