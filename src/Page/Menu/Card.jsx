// Card.js
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CustomModal from "./CustomModal";


const Card = ({ menu }) => {
  const { name, image, price } = menu;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="flex  p-5 bg-base-100 shadow-xl">
        <figure><img className='w-full h-full rounded-lg ' src={image} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}$</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={openModal}><FaPlus /></button>
          </div>
        </div>
      </div>
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} menu={menu} />
    </div>
  );
};

export default Card;
