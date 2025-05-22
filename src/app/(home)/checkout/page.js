'use client'

import { CircleCheck, Truck, Upload } from "lucide-react";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const [order, setOrder] = useState(null); // State untuk menyimpan data order
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      setError(null);
      try {
        const orderId = localStorage.getItem("currentOrderId"); // Ambil ID order dari localStorage
        const response = await fetch(`http://localhost:8000/api/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch order");

        const data = await response.json();
        setOrder(data.order); // Ambil pesanan pertama (dari contoh API)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          order_id: order.order_id,
          payment_proof_url: "https://link-to-uploaded-proof", // Ganti dengan URL yang sebenarnya
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Payment successful!");
        window.location.href = "/thank-you"; // Redirect ke halaman terima kasih
      } else {
        alert(`Payment failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("An error occurred while processing the payment.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-20 pr-0 flex flex-row justify-between ">
      {/* Sidebar */}
      <div className="flex flex-col gap-10 w-[25%] ">
        <h1>Account</h1>
        <div>
          <h1 className="text-2xl font-semibold">Delivery</h1>
          <div className="flex flex-row justify-between bg-black p-5 rounded-xl mt-2">
            <div className="flex flex-row gap-2">
              <CircleCheck />
              <p>Ship only</p>
            </div>
            <Truck />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Address</h1>
          <div className="bg-black rounded-xl mt-2 text-center py-10 text-xl">
            User Address
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Payment (Transfer only)</h1>
          <div className="flex flex-row bg-black p-5 rounded-xl mt-2">
            <CircleCheck />
            <div>
              <h2>BCA (Bank Central Asia)</h2>
              Account BCA : 449-001-3747 - Rafid
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            Upload your payment proof here
          </h1>
          <div className="bg-black text-center p-16 rounded-xl mt-2">
            <Upload size={48} className="mx-auto" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-2xl">Order Status :</p>
          <h1
            className={`p-3 px-10 text-xl font-semibold rounded-[50px] ${
              order.payment_status === "unpaid" ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
          >
            {order.payment_status}
          </h1>
        </div>
      </div>

      {/* Order Details */}
      <div className="fixed flex-flex-col top-28 right-0 h-[calc(100%/1.2)] bg-white w-[40%] text-black p-10 rounded-[50px] rounded-tr-none rounded-br-none shadow-xl">
        {order.items.map((item) => (
          <div key={item.order_item_id} className="flex flex-row mb-5">
            <div style={{backgroundImage: `url(${item.product_image})`}}>
            </div>   
            <img
              src={item.product_image}
              alt={item.products.name}
            />
            <div className="flex flex-row justify-between w-full pl-5">
              <div>
                <h1>{item.products.name}</h1>
                <p>Size: {item.size}</p>
                <p>Qty: {item.quantity}</p>
              </div>
              <p>Rp. {item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-row w-full justify-between mt-10">
          <p>Subtotal</p>
          <p>Rp. {order.total_price}</p>
        </div>
        <div className="h-[2px] bg-black my-5"></div>
        <button onClick={handlePayment} className="p-3 px-8 rounded-xl bg-black text-white font-semibold">
          Pay Now
        </button>
      </div>
    </div>
  );
}
