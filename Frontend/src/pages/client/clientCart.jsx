import { useState } from "react"
import { addCart, clearCart, getCart } from "../../utils/cart"
import { FaTrashAlt } from "react-icons/fa"

export default function ClientCart(){
  
    const [cart, setCart] = useState(getCart())

    return(
        <div className="w-full h-full flex-col flex justify-center items-center">
            {
                cart.map(
                    (item) => {
                        return(

                            <div key={item.productId} className="w-[700px] h-[100px] bg-primary shadow-2xl flex flex-row rounded-2xl m-2 flex items-center">
                                <img src={item.img} alt="pic" className="w-[100px] h-[100px] rounded-2xl ojbect-cover"/>

                                <div className="w-[300px] p-2 flex-col flex  font-bold">
                                    <h1>{item.productName}</h1>
                                    <h1>Rs: {item.lablePrice}</h1>
                                </div>
                                
                                <div className="flex justify-center items-center"> 
                                    <div className="bg-primary w-[120px] h-[45px] rounded-2xl shadow-lg flex items-center justify-between p-2">        
                                        <button className="w-8 h-8 flex items-center justify-center bg-amber-200 hover:bg-amber-300 rounded-full text-lg font-bold transition" onClick={
                                            () => {
                                                addCart()
                                            }
                                        }>+</button>
                                        <h1 className="text-lg font-semibold ">{item.qty}</h1>
                                        <button className="w-8 h-8 flex items-center justify-center bg-amber-200 hover:bg-amber-300 rounded-full text-lg font-bold transition">-</button>
                                    </div>
                                </div>
                                
                                <h1 className="p-8">Price Rs: {item.qty * item.lablePrice}</h1>
                                <button className=" hover:bg-red-600 rext-white rounded-full p-2"><FaTrashAlt/></button>  

                            </div>
                            
                        )
                    }
                )
            }
        </div>
    )


}
