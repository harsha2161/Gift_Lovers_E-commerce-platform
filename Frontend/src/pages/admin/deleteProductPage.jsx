import axios from "axios"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"

export default function DeleteProduct(){
    
    const location = useLocation()
    const navigate = useNavigate()

    const productId = location.state.productId

     async function deleteHadel(){
        if(navigate == null){
            toast.error("Product not Found")
        }

        try{
            const response = await axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+ productId)
            toast.success("delete Successfull")
            navigate("/admin/products")
        }catch(err){
            toast.error("Delete failed")
           console.log(err)
        }
 
    }
  
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="h-[200px] w-[500px] border shadow flex items-center justify-center flex-col rounded-3xl shadow-2xl">
            <span className="font-black font-bold">Are You Sure Delete This Product</span>
            
            <div className="p-4">
                <button className="bg-red-900 text-white items-center cursor-pointer m-4 p-2 rounded-xl" onClick={deleteHadel}>Delete</button>
                <button className="bg-blue-900 text-white items-center cursor-pointer m-4 p-2 rounded-xl" onClick={ () => {navigate("/admin/products")}}>Cencal</button>
            </div>
        </div>
        </div>
        
    )
}