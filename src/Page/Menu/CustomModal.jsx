// Modal.js
import React, { useState } from "react";
import Modal from "react-modal";
import { FaPlus, FaMinus } from "react-icons/fa6";

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
      maxWidth: "300px", // Adjust the maximum width as needed
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add to Cart"
      style={modalStyle}
    >
      <div className="card bg-base-100 shadow-xl">
        <img className="rounded-lg" src={image} alt={name} />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <div>
          <button onClick={decreaseQuantity}><FaMinus /></button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}><FaPlus /></button>
        </div>
        <p>Total Price: {totalPrice}$</p>
        <button>Add to Cart</button>
      </div>
    </Modal>
  );
};

export default CustomModal;
