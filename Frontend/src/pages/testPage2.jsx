import { useState } from "react"
import { createClient } from "@supabase/supabase-js";

   
    
export default function TestPage2() {

    const [image, setImg] = useState(null);
 
    function FileUpload(){
            console.log("file upload button is clicked")
             
            supabase.storage.from("images").upload(image.name, image, {
            upsert : false,
            cacheControl : "3600"
        }).then(() => {
            console.log("image upload successfull")
            const publicUrl = supabase.storage.from("images").getPublicUrl(image.name)
            console.log(publicUrl)

             
        }).catch(
            (e) => {
                console.log(e)
            }
        )
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs"  // image is added for arrys like many image is added and save this images to arrays
                onChange={(e) => {
                        setImg(e.target.files[0])
                         console.log(e.target.files) // arry ekak we, ekak uplord wena nisa array eke palaweni element eka reaad kara ganiiiii
                    }} 
            />

            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded " onClick={FileUpload}>file uplord</button>

        </div>
    )
}