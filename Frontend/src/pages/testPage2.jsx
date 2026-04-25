import { useState } from "react"
import mediaUpload from "../utils/mediaUpload";

export default function TestPage2(){


    const [image, setImg] = useState(null)

    async function fileUpload(){

    //     mediaUpload(image).then(
    //         (res) =>{
    //             console.log(res)
    //         }
    //     ).catch(
    //         (res) => {
    //             console.log(res)
    //         }
    //     )
        
    // }
    try{

        const url = await mediaUpload(image)
        console.log(url)
        
    }catch(err){
        console.log(err)
        }

    }
   

    return (

        <div className="w-full h-screen md:bg-green-500 bg-red-400  flex justify-center items-center flex-col">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs"  // image is added for arrys like many image is added and save this images to arrays
                onChange={(e) => {
                        setImg(e.target.files[0])
                         console.log(e.target.files) // arry ekak we, ekak uplord wena nisa array eke palaweni element eka reaad kara ganiiiii
                    }} 
            />

            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded " onClick={fileUpload}>file uplord</button>

        </div>
    )
}