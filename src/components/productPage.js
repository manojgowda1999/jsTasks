
import React from 'react';
import ProductDetails from './productDetails';
const ProductPage = () => {
    const productObj = {
        brandName : "nokia",
        price : 20000,
        description : "50%",
    }
  return (
    <div >
      <h1>Product Page........!</h1>
      < ProductDetails 
        productName={productObj.brandName} 
        price={productObj.price} 
        description={productObj.description} 
      />
    </div>
  );
};
export default ProductPage;
