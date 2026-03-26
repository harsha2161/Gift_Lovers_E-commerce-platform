export default function TestPage(){
    let count = 0;
    return(
        <div className="w=full h-screen flex justify-center items-center">
            <div className="w-[450px] h-[250px] shadow flex justify-center items-center ">
                <button onClick={ () => {
                    console.log("- clicked")
                    count--
                    
                }} className="bg-blue-900 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    -
                </button>

                <span className="text-[30px] mx-[20px] font-bold">
                    {count}
                </span>

                <button onClick={() =>{
                    console.log("+ clicked")
                    count++
                }} className="bg-blue-900 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    +
                </button>
            </div>
        </div>
    )
}