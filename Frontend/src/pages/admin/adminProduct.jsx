import { useEffect, useState } from "react"
import { sampleProducts } from "../../assets/sampleData/sampleProducts"
import axios from "axios"

export default function AdminProductPage(){
   
    const [product, setProduct] = useState(sampleProducts)

    useEffect(() => {
        //this function looade in 1st time of run this components
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
        (res) =>{
            console.log(res.data)
          //  setProduct(res.data)  //පේජ් එජ මෙතනදීඉ රීෆ්‍රෙශ් වෙනනිසා නැවත නැවත රන් වී බැක් එන්ඩ කෝල් යයි
          //  
        }
    )
    }, [/* this is empty arry*/ ])

    

    return(
      <div className="w-full h-full overflow-y-auto p-6 bg-gray-100">
  <div className="overflow-x-auto rounded-2xl shadow-xl">
    
    <table className="w-full text-sm text-left bg-white">
      
      {/* Header */}
      <thead className="bg-gray-900 text-white text-xs uppercase tracking-wider">
        <tr>
          <th className="px-6 py-4 text-center">Product</th>
          <th className="px-6 py-4 text-center">Image</th>
          <th className="px-6 py-4 text-center">Price</th>
          <th className="px-6 py-4 text-center">Status</th>
        </tr>
      </thead>

      {/* Body */}
      <tbody className="divide-y">
        {product.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-50 transition duration-200"
          >
            {/* Name */}
            <td className="px-6 py-4 text-center font-medium text-gray-800">
              {item.productName}
            </td>

            {/* Image */}
            <td className="px-6 py-4 flex justify-center">
              <img
                src={item.img[0]}
                alt="product"
                className="w-14 h-14 object-cover rounded-xl border shadow-sm"
              />
            </td>

            {/* Price */}
            <td className="px-6 py-4 text-center text-green-600 font-bold">
              Rs. {item.lablePrice}
            </td>

            {/* Stock */}
            <td className="px-6 py-4 text-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>
</div>
    )
}