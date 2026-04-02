import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { FaEdit, FaTrash } from "react-icons/fa";

export default function AdminProductPage(){
   
    const [product, setProduct] = useState([])  // <<<--- me than hithenata 
    const [isLoading , setIsLoading] = useState(true)
    const navigate = useNavigate()
    

    useEffect(() => {
        //this function looade in 1st time of run this components
        if(isLoading == true){
             axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
        (res) =>{
            console.log(res.data);
            setProduct(res.data);  //පේජ් එජ මෙතනදී රීෆ්‍රෙශ් වෙනනිසා නැවත නැවත රන් වී බැක් එන්ඩ කෝල් යයි
            setIsLoading(false);
        }
    )
        }
     
    },[isLoading])

    return(
    <div className="w-full h-full overflow-y-auto p-6 bg-gray-200">
      <div className="overflow-x-auto h-full rounded-2xl shadow-xl relative">
    
       {!isLoading ? 
        <table className="w-full text-sm text-left bg-white">
      
            <thead className="bg-gray-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 text-center">Product</th>
                <th className="px-6 py-4 text-center">Image</th>
                <th className="px-6 py-4 text-center">Price</th>
                <th className="px-6 py-4 text-center">Stock</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
          </thead>

    
          <tbody className="divide-y">
            {
              product.map(  // අයිටෙම් ප්‍රමානයට රන් වේ
                (item, index) => {
                 return (
                  // index using unqe values or is not uniqe value in this item can use index

                  <tr key={index} className="text-center">

                    <td>{item.productName}</td>
                    <td className="flex items-center justify-center"><img src={item.img[0]} className="w-[90px] h-[80px] p-2"/></td>
                    <td>{item.lablePrice}</td>
                    <td>{item.stoke}</td>
                    <td className="">
                      <div className="flex justify-center items-center gap-3">
                        <FaTrash className="text-2xl text-red-500 cursor-pointer "onClick={
                          () => {
                            navigate("/admin/deleteprodute",{
                              state : item
                            })
                          }
                        }/>
                        <FaEdit className="text-2xl text-blue-700 cursor-pointer" onClick={
                          () =>{
                            navigate("/admin/editProdute",{
                              state : item  
                              })
                          }
                        }/>
                      </div>
                      
                      </td>
                  </tr>
                 )
                }
              )
            }
              
          </tbody>

        </table> 
        
        : 

        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[70px] h-[70px] border-t-[5px] rounded-full animate-spin"></div>
        </div>
        }

        <Link to={"/admin/addproduct"}><button className="absolute bottom-5 right-5 bg-green-500 text-3xl text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition fixed top-140 right-15">+</button></Link>
    </div>
  </div>
  )
}