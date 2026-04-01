import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function AdminProductPage(){
   
    const [product, setProduct] = useState([])  // <<<--- me than hithenata 

    useEffect(() => {
        //this function looade in 1st time of run this components
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
        (res) =>{
            console.log(res.data)
            setProduct(res.data)  //පේජ් එජ මෙතනදීඉ රීෆ්‍රෙශ් වෙනනිසා නැවත නැවත රන් වී බැක් එන්ඩ කෝල් යයි
          //  
        }
    )
    }, [/* this is empty arry*/ ])

    

    return(
    <div className="w-full h-full overflow-y-auto p-6 bg-gray-200">
      <div className="overflow-x-auto h-full rounded-2xl shadow-xl relative">
    
        <table className="w-full text-sm text-left bg-white">
      
            <thead className="bg-gray-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 text-center">Product</th>
                <th className="px-6 py-4 text-center">Image</th>
                <th className="px-6 py-4 text-center">Price</th>
                <th className="px-6 py-4 text-center">Stock</th>
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
                    <td>{<img src={item.img[0]} className="w-[50px] h-[50px]"/>}</td>
                    <td>{item.lablePrice}</td>
                    <td>{item.stoke}</td>
                  </tr>
                 )
                }
              )
            }
              
          </tbody>

        </table>
        <Link to={"/admin/addproduct"}><button className="absolute bottom-5 right-5 bg-green-500 text-3xl text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
  +
</button>
</Link>
  </div>

</div>
    )
}