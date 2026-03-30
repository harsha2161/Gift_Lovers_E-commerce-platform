import { Link, Route, Routes} from "react-router-dom";
import AdminProductPage from "./admin/adminProduct";

export default function AdminPage(){
    return (
        <div className=" w-full h-screen flex">
            <div className="w-[200px] h-full flex flex-col">

                <Link to="/admin/products">Products</Link>
                <Link to="/admin/review">Review</Link>
                <Link to="/admin/order">Order</Link>
                <Link to="/admin/users">Users</Link>
   
            </div>
            <div className="h-full w-[calc(100%-200px)] border border-black flex  ">
                <Routes>
                    <Route path="products" element={<AdminProductPage/>}/>
                    <Route path="/review" element={<h1>products</h1>}/>
                    <Route path="/order" element={<h1>products</h1>}/>
                    <Route path="/users" element={<h1>products</h1>}/>
                </Routes>
            </div>
        </div>
    )
}