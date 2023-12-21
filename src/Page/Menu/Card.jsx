import React from 'react';

const Card = ({menu}) => {
 const {name,image,price}=menu
    return (
        <div>
            <div className="flex  p-5 bg-base-100 shadow-xl">
  <figure><img className='w-full rounded-lg ' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>Price {price}$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;