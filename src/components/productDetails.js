import React from 'react';



const ProductDetails = (props) => {
  return (
    <div>
      <h2>{props.productName}</h2>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default ProductDetails;