import { useState } from "react";


export default function TestPage(){

    const [count ,setCount] = useState(0)
    const [states, setStates] = useState("click")  // hooks eka piliwalata run wiya yuthui sema welawakadeeepa
    //(first) => variable
    //(seound) => function

    //state function run novi newatha page eka run we
    

    return(
        <div className="w=full h-screen flex justify-center items-center">
            <div className="w-[450px] h-[250px] shadow flex justify-center items-center ">
                <button onClick={ () => {
                   setCount(count-1)
                    
                }} className="bg-blue-900 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    -
                </button>

                <span className="text-[30px] mx-[20px] font-bold">
                    {count}
                </span>

                <button onClick={() =>{
                   setCount(count+1)
                }} className="bg-blue-900 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    +
                </button>

                <div className="w-[450px] h-[250px] shadow flex justify-center items-center  m-[10px]" >
                <button onClick={ () =>{
                         setStates("passed")
                }
                   
                } className="bg-blue-900 text-white  font-bold trxt-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    pass
                    </button>
                <span className="text-[30px] mx-[20px] font-bold">
                    {states}
                </span>

                <button onClick={ () => {
                      setStates("fail")
                }
                  
                } className="bg-blue-900 text-white  font-bold trxt-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    fail
                    </button>
                </div>
                

            </div>

           
        </div>

       

        
    )
}

