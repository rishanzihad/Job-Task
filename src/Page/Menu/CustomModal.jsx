import React, { useState } from "react";
import Modal from "react-modal";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose, menu }) => {
  const { name, image, price } = menu;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const totalPrice = price * quantity;

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "400px", // Adjust the maximum width as needed
    },
 
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add to Cart"
      style={modalStyle}
    >
      <div className=" p-2 card bg-base-100 ">
        <button
          onClick={onRequestClose}
          className="absolute text-3xl top-0 right-0 m-2  text-black"
        >
       <FiDelete />
        </button>
        <img className="rounded-lg" src={image} alt={name} />
        <h2 className="text-center text-2xl font-semibold">{name}</h2>
        <p className="text-xl mb-5 mt-3">Price: {price}$</p>
        <div className="btn bg-gradient-to-r from-red-500 to-white-500">
          <button onClick={decreaseQuantity}><FaMinus /></button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}><FaPlus /></button>
        </div>
        <p className="mb-4 text-xl mt-4">Total Price: {totalPrice.toFixed(0,2)}$</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;