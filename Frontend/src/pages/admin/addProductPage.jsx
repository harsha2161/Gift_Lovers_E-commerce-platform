import axios from "axios"
import { useState } from "react"
import mediaUpload from "../../utils/mediaUpload"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function AddProductPage(){

    // using use state hook to save inpute deils detials to variable
    const [productId , setProductId] = useState("")
    const [productName , setProductName] = useState("")
    const [altname  , setAltname] = useState("")
    const [description , setDescription] = useState("")
    const [lablePrice , setLablePrice] = useState("0")
    const [stokes , setStokes] = useState("0")
    const [image, setImage] = useState([])

    const navigate = useNavigate()

    async function AddProduct(){
        //get token in local storage and check and sent error msg
        const token = localStorage.getItem("token")
        if(token == null){
            toast.error("please login first")
        }
        //check image added or nor added
        if(image.length <= 0){
            toast.error("pleace add one or more images")
            return
        }
        //make arr for store the all images links
        const promisesArray = []

        //read image fill arr and upload images to database and save links to imagesUrl
        for(let i=0; i<image.length; i++){
            promisesArray[i] = mediaUpload(image[i])
        }

        try{
            const imagesUrls = await Promise.all(promisesArray).then()
            console.log(imagesUrls)

            const altNamesArray = altname.split(",") // devide by array and save words to arry
            
            //make products json and after using to backend call and attact sent to backend (line 54)
            const products = {
                productId : productId,
                productName : productName,
                altName : altNamesArray,
                description : description,
                stoke : stokes,
                img : imagesUrls,
                lablePrice : lablePrice,
            }
            // call to back end with product detiles json attact to sent backend
            axios.post(import.meta.env.VITE_BACKEND_URL+"/api/product/addProduct", products, {
                      headers : {
                        "Authorization" : "Bearer " + token // added Bearer word to token, there  for need to back end try remove to Bearer word
                    }
                }).then(
                    
                (res) =>{   
                    toast.success("Products addded Successfully")
                    navigate("/admin/products")
                } 
            )
                }catch(e){
                    console.log(e)
                    toast.error(e.response.data.message)
                }
        
    }
   

    return(

  <div className="w-full h-full overflow-y-auto p-6 bg-gray-200 flex items-center flex-col">

    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 tracking-wide">
      Add Product
    </h2>

    <div className="flex flex-col gap-5">

      {/* Product ID */}
      <div>
        <label className="text-sm font-medium text-gray-600">Product ID</label>
        <input
          type="text"
          placeholder="P954"
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          onChange={(e) => setProductId(e.target.value)}
          value={productId}
        />
      </div>

      {/* Product Name */}
      <div>
        <label className="text-sm font-medium text-gray-600">Product Name</label>
        <input
          type="text"
          placeholder="Bluetooth Mouse"
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
      </div>

      {/* Alt Names */}
      <div>
        <label className="text-sm font-medium text-gray-600">Alt Names</label>
        <input
          type="text"
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          onChange={(e) => setAltname(e.target.value)}
          value={altname}
        />
      </div>

      {/* Description */}
      <div>
        <label className="text-sm font-medium text-gray-600">Description</label>
        <input
          type="text"
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      {/* Label Price */}
      <div>
        <label className="text-sm font-medium text-gray-600">Label Price</label>
        <input
          type="number"
          placeholder="Rs: 30000"
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          onChange={(e) => setLablePrice(e.target.value)}
          value={lablePrice}
        />
      </div>

      {/* Stock */}
      <div>
        <label className="text-sm font-medium text-gray-600">Stock</label>
        <input
          type="number"
          placeholder="45"
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          onChange={(e) => setStokes(e.target.value)}
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="text-sm font-medium text-gray-600">Upload Image</label>
        <input
          type="file"
          multiple
          className="w-full mt-2 px-3 py-2 border border-dashed border-gray-400 rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
          onChange={(e) => {
            setImage(e.target.files);
            console.log(e.target.files);
          }}
        />
      </div>

      {/* Button */}
      <button
        onClick={AddProduct}
        className="mt-6 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
      >
        Add Product
      </button>

    </div>
  </div>
    )
}