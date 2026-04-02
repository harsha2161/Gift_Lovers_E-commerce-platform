import axios from "axios";
import { useEffect, useState } from "react"
import ProductsCard from "../../components/ProductsCards";

export default function ClientProductPage(){

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        () => {
             if(isLoading){
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                    (res) =>{
                        console.log(res.data)
                        setProducts(res.data)
                        setIsLoading(false)
                    }    
                )
                }
            }, [isLoading]
       
    )
   

    return (
        
        <div className="w-full flex flex-wrap justify-center items-center gap-5 " >
            
            {
                products.map((item, index) => {
                    return(
                        <ProductsCard key={index} product = {item} />
                    )
                })
            }
           
        </div>
           
                 
    
    )
}