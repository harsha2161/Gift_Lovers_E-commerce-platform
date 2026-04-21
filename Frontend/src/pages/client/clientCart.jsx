import { useState } from "react"
import { addCart, clearCart, getCart, removeFromCart ,getTotle} from "../../utils/cart"
import { FaTrashAlt } from "react-icons/fa"

export default function ClientCart(){
  
    const [cart, setCart] = useState(getCart())

    return(
        <div className="w-full h-full flex justify-center items-center flex-row ">
            <div className="w-[50%]] h-full flex-col flex justify-center">
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
                                                addCart(item, 1)
                                                setCart(getCart())
                                            }
                                        }>+</button>
                                        <h1 className="text-lg font-semibold ">{item.qty}</h1>
                                        <button className="w-8 h-8 flex items-center justify-center bg-amber-200 hover:bg-amber-300 rounded-full text-lg font-bold transition" onClick={
                                            () => {
                                                addCart(item, -1)
                                                setCart(getCart())
                                            }
                                        }>-</button>
                                    </div>
                                </div>
                                
                                <h1 className="p-8">Price Rs: {item.qty * item.lablePrice}</h1>
                                <button className=" hover:bg-red-600 rext-white rounded-full p-2" onClick={
                                    () => {
                                        removeFromCart(item.productId)
                                        setCart(getCart())
                                    }
                                }><FaTrashAlt/></button>  

                            </div>
                            
                        )
                    }
                )
            }
            
            </div>

            <div className="h-full w-[50%] flex justify-center items-center">
                <div className="h-[450px] w-[400px] shadow-2xl flex-col">
                    
                    <h1 className="font-bold text-3xl flex justify-center">Order Summary</h1>

                    <div className="h-[300px] w-full mt-10 p-2">
                        <h1>Totle Price Rs:{getTotle()}</h1>
                        <h1>discounts: 0 </h1>
                    </div>

                    <div className=" flex justify-center items-center">
                        <button className="w-[80px] bg-green-500 rounded-2xl h-[30px] hover:bg-green-900 font-bold">buy now</button>
                    </div>

                    

                      

                </div>
            </div>
           
        </div>
        
    )


}
