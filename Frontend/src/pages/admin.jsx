import { Link, Route, Routes, useLocation } from "react-router-dom";
import AdminProductPage from "./admin/adminProduct";
import AddProductPage from "./admin/addProductPage";
import EditProductPage from "./admin/editProductPage";
import DeleteProduct from "./admin/deleteProductPage";
import { AdminOrder } from "./admin/adminOrders";
import { AdminUser } from "./admin/adminUsers";


export default function AdminPage() {

  const location = useLocation()
  const path = location.pathname

   function getClass(name){
      if(path.includes(name)){
        return "bg-gray-700 rounded p-2 "
      }else{
        return "hover:bg-gray-700 h-[42px] rounded"
      }
    }

  return (

    <div className="w-full h-screen flex bg-gray-100 rounded-xl">
      <div className="w-[220px] h-full bg-gray-900 text-white flex flex-col shadow-xl">

        <h2 className="text-2xl font-bold text-center py-6 border-b border-gray-700">Admin Panel</h2>

        <div className="flex flex-col gap-2">
          <Link to="/admin/products" className={getClass("products" )}>📦 Products</Link>
          <Link to="/admin/review"  className={getClass("review" )}>⭐ Review</Link>
          <Link to="/admin/order"  className={getClass("order" )}>🧾 Order</Link>
          <Link to="/admin/users"  className={getClass("users" )}>👤 Users</Link>
        </div>

      </div>

      <div className="bg-white w-full h-full rounded-2xl shadow-lg p-6">

          <Routes>
            <Route path="products" element={<AdminProductPage />} />
            <Route path="/review" element={<h1>products</h1>} />
            <Route path="/order" element={<AdminOrder/>} />
            <Route path="/users" element={<AdminUser/>} />
            <Route path="/addproduct" element={<AddProductPage />} />
            <Route path="/editProdute" element={<EditProductPage />} />
            <Route path="/deleteprodute" element={<DeleteProduct/> } />
          </Routes>

      </div>
    </div>
  )
}