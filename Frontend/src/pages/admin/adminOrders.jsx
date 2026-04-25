import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../components/loading";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "12px",
    width: "750px",
    height: "550px",
    overflowY: "auto",
    // background : "g",
  },
};

export function AdminOrder() {
  const [orders, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [status, setStatus] = useState("")

  function openModal(order) {
    setActiveOrder(order);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setActiveOrder(null);
  }

  useEffect(() => {
    if (isLoading) {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        setIsLoading(false);
        return;
      }

      axios.get(import.meta.env.VITE_BACKEND_URL + "/api/order/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setOrder(res.data);
          setIsLoading(false);
        })
        .catch(() => {
          toast.error("Error fetching orders");
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  return (
    <div className="w-full h-full overflow-y-scroll p-6 bg-gray-200">
      <div className="overflow-x-auto rounded-2xl shadow-xl">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {/* MODAL */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              style={customStyles}
            >
              {activeOrder && (
                <div className="flex flex-col gap-6 border-2 p-5 rounded-2xl">
                  <h2 className="text-2xl font-bold text-center">
                    Order Details
                  </h2>
<div className="flex justify-center gap-30">
                  {/* Customer Info */}
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">
                      Customer Info
                    </h3>
                    <p><b>Name:</b> {activeOrder.name}</p>
                    <p><b>Email:</b> {activeOrder.email}</p>
                    <p><b>Phone:</b> {activeOrder.phone}</p>
                    <p><b>Address:</b> {activeOrder.address}</p>
                  </div>

                  {/* Order Info */}
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">
                      Order Summary
                    </h3>
                    <p><b>Order ID:</b> {activeOrder.orderId}</p>
                    <p>
                      <b>Date:</b>{" "}
                      {new Date(activeOrder.date).toLocaleString()}
                    </p>
                    <p><b>Status:</b> {status}
                      <select 
                        onChange={async (e) =>{
                          const updatedValue = e.target.value
                        try{
                             const token = localStorage.getItem("token")
                             const responce = await axios.put(import.meta.env.VITE_BACKEND_URL+"/api/order/" + activeOrder.orderId + "/" + updatedValue, {
                              headers : {
                                Authorization : "Bearer " + token,
                              },
                             })
                             toast.success("status update successfull completed") 
                             
                             setIsLoading(true)
                             const updateOrder = {...activeOrder, status : updatedValue}
                        }catch(err){
                              toast.error("status update failed")
                              console.log(err)
                        }
                      } }>
                          <option selected disabled>{activeOrder.status}</option>
                          <option value="completed">completed</option>
                          <option value="pending">pending</option>
                          <option value="return">returns</option>

                          
                      </select>  
                    </p>
                    <p className="text-xl font-bold">
                      Total: Rs. {activeOrder.total?.toFixed(2)}
                    </p>
                  </div>
</div>
                  {/* Products */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Products
                    </h3>

                    <div className="flex flex-col gap-4">
                      {activeOrder.orderProducts.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-3 border rounded-xl shadow-sm"
                        >
                          <img
                            src={item.productInfo.images}
                            alt="product"
                            className="w-20 h-20 object-cover rounded-lg"
                          />

                          <div className="flex-1">
                            <h4 className="font-semibold">
                              {item.productInfo.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {item.productInfo.discription}
                            </p>
                            <p>Qty: {item.quantity}</p>
                          </div>

                          <div className="font-bold">
                            Rs. {item.productInfo.price * item.quantity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Close Button */}
                  <div className="flex flex justify-center items-center gap-15 ">
                  <button onClick={closeModal} className="bg-red-500 w-[150px] text-white py-2 rounded-lg mt-4">Close</button>
                  <button onClick={() =>{window.print()}} className="bg-green-500 w-[150px] text-white py-2 rounded-lg mt-4">Print</button>
                  <button onClick={() =>{window.print()}} className="bg-blue-500 w-[150px] text-white py-2 rounded-lg mt-4">save</button>

                  </div>

                </div>
              )}
            </Modal>

            {/* TABLE */}
            <table className="w-full text-sm bg-white">
              <thead className="bg-gray-900 text-white text-xs uppercase">
                <tr>
                  <th className="px-6 py-4 text-center">Order ID</th>
                  <th className="px-6 py-4 text-center">Name</th>
                  <th className="px-6 py-4 text-center">Phone</th>
                  <th className="px-6 py-4 text-center">Total</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {
                orders.map((item, index) => (
                  <tr
                    key={index}
                    className="text-center hover:bg-gray-50 cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <td className="px-6 py-4">{item.orderId}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.phone}</td>
                    <td className="px-6 py-4">
                      Rs. {item.total?.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">{item.status}</td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}