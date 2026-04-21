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
  !isLoading ? (
    <div className="w-full h-full flex flex-wrap justify-center items-center gap-5">

      {products.map((item) => (
        <ProductsCard 
          key={item.productId} 
          product={item} 
        />
      ))}

    </div>
  ) : (
<div className="w-full h-full flex justify-center items-center">
          <div className="w-[70px] h-[70px] border-t-[5px] rounded-full animate-spin fixed top-96"></div>
        </div>  )
);
                 
    
    
}