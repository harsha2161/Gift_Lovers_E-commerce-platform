import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../../components/loading"
import { MdBlock } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

export function AdminUser(){
    
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        if(isLoading){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users").then(
                (res) =>{
                    setUsers(res.data)
                    console.log(res.data)
                    setIsLoading(false)
                }
            ).catch(
                (err) =>{
                    console.log(err)  
                    setIsLoading(false)  
                }
            )
        }

    },[isLoading])

    
    return(
       
        <div className=" w-full h-full overflow-y-scroll ">
            <div className=" rounded shadow">
                {isLoading ? (
                    <Loading/>
                ) 
                    :
                (
                    
                    <div>
                        <table className="w-full text-sm bg-white">
                            <thead className="bg-gray-900 text-white text-xs uppercase">
                                <tr>
                                    <th className="px-6 py-4 text-center">Picture</th>
                                    <th className="px-6 py-4 text-center">Name</th>
                                    <th className="px-6 py-4 text-center">Email</th>
                                    <th className="px-6 py-4 text-center">Address</th>
                                    <th className="px-6 py-4 text-center">Role</th>
                                    <th className="px-6 py-4 text-center">Action</th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    users.map((items , index) => {
                                        return(

                                        <tr key={index} className="text-center hover:bg-gray-200 cursor-pointer" >
                                            <td className="flex items-center justify-center"><img src={items.img} className="w-[90px] h-[80px] p-2"/></td>
                                            <td className="px-6 py-4">{items.firstName + " " + items.lastName}</td>
                                            <td className="px-6 py-4">{items.email}</td>
                                            <td className="px-6 py-4">pending</td>
                                            <td className="px-6 py-4">{items.role}</td>
                                            <td>
                                                <div className="flex justify-center items-center gap-3">

                                                    <MdBlock className="text-2xl text-gray-500 cursor-pointer"/>                                                                
                                                    <FaEdit className="text-2xl text-blue-700 cursor-pointer" />         
                                                    <FaTrash className="text-2xl text-red-500 cursor-pointer" />
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                )


                
                }

            </div>
        </div>
    )
}