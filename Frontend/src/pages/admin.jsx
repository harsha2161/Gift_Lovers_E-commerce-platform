import { Link, Route, Routes } from "react-router-dom";
import AdminProductPage from "./admin/adminProduct";
import AddProductPage from "./admin/addProductPage";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-[220px] h-full bg-gray-900 text-white flex flex-col shadow-xl">

        <h2 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
          Admin Panel
        </h2>

        <div className="flex flex-col gap-2 p-4">

          <Link
            to="/admin/products"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            📦 Products
          </Link>

          <Link
            to="/admin/review"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            ⭐ Review
          </Link>

          <Link
            to="/admin/order"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            🧾 Order
          </Link>

          <Link
            to="/admin/users"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            👤 Users
          </Link>

        </div>
      </div>

      {/* Content Area */}

        <div className="bg-white w-full h-full rounded-2xl shadow-lg p-6">

          <Routes>
            <Route path="products" element={<AdminProductPage />} />
            <Route path="/review" element={<h1>products</h1>} />
            <Route path="/order" element={<h1>products</h1>} />
            <Route path="/users" element={<h1>products</h1>} />
            <Route path="/addproduct" element={<AddProductPage />} />
          </Routes>

        </div>
      </div>
  );
}