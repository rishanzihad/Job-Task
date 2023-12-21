import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);

        // Save the updated cart items to localStorage
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        // Update the state
        setCartItems(updatedCartItems);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
   <div>
   .
     <div className="mt-12 text-center">
      <h1 className="text-4xl font-bold mb-8">My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-44 text-4xl">Your cart is empty</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {cartItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 p-4">
              <div className="card flex flex-col items-center">
                <img src={item.image} alt={item.name} className="rounded-lg mb-2 w-full h-48 object-cover" />
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Price: {item.totalPrice}$</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleDelete(index)} className="mt-2 bg-red-500 text-white py-2 px-4 rounded">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
   </div>
  );
};

export default Cart;
