import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { useLocation } from "react-router-dom"

export default function ClientCart(){
    
    const location = useLocation()
    const [cart, setCart] = useState(location.state?.cart || [])

    function gettotle(){
        let totle = 0
        cart.forEach(item => {
            totle += item.lablePrice * item.qty
        })
        return totle
    }

    function removeFromCart(index) {
        const newCart = cart.filter(
            (item,i) => i != index
        )
        setCart(newCart)
    }

    function changQty(index, qty){
        const newQty = cart[index].qty + qty;
        if(newQty <= 0){
            removeFromCart(index)
            return
        }else{

            cart[index].qty = newQty
            const newCart = [...cart];
            setCart(newCart)
        }
    }
   
    return(
        <div className="w-full h-full flex justify-center items-center flex-row ">
            <div className="w-[50%]] h-full flex-col flex justify-center items-center">
            {
                cart.map(
                    (item,index) => {
                        return(
                            
                            <div key={item.productId} className="w-[600px] h-[100px] bg-primary shadow-2xl flex flex-row rounded-2xl m-2 flex items-center">
                                <img src={item.img} alt="pic" className="w-[100px] h-[100px] rounded-2xl ojbect-cover"/>

                                <div className="w-[300px] p-2 flex-col flex  font-bold">
                                    <h1>{item.productName}</h1>
                                    <h1>Rs:{item.lablePrice}</h1>
                                </div>
                                
                                <div className="flex justify-center items-center"> 
                                    <div className="bg-primary w-[120px] h-[45px] rounded-2xl shadow-lg flex items-center justify-between p-2">        
                                        <button className="w-8 h-8 flex items-center justify-center bg-amber-200 hover:bg-amber-300 rounded-full text-lg font-bold transition" onClick={
                                            () => {
                                               changQty(index,1)
                                            }
                                        }>+</button>
                                        <h1 className="text-lg font-semibold ">{item.qty}</h1>
                                        <button className="w-8 h-8 flex items-center justify-center bg-amber-200 hover:bg-amber-300 rounded-full text-lg font-bold transition" onClick={
                                            () => {
                                               changQty(index,-1)
                                            }
                                        }>-</button>
                                    </div>
                                </div>
                                
                                <h1 className="p-8">Price Rs: {item.qty * item.lablePrice}</h1>
                                <button className=" hover:bg-red-600 rext-white rounded-full p-2" onClick={
                                    () => {
                                        removeFromCart(index)
                                    }
                                }><FaTrashAlt/></button>  

                            </div>
                            
                        )
                    }
                )
            }
            
            </div>

          <div className="w-[50%] flex justify-center items-center">
            <div className="w-[400px] bg-white shadow-2xl rounded-lg p-6">

                    <h1 className="text-2xl font-semibold mb-6">Order Summary</h1>

                    <div className="space-y-3 text-gray-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>Rs.{gettotle().toFixed(2)}</span>
                        </div>

                     
                    </div>

                    <div className="flex justify-between mt-6 text-lg">
                        <span>Total</span>
                        <span className="text-orange-500"></span>
                    </div>

                    <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded hover:bg-orange-600 font-semibold">Place Order</button>
            </div>

        </div>        
</div>
        
    )
}
