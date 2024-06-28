import React from 'react';
import ProductDetails from './productDetails';
import Dashboard from './Dashboard';

const ProductList = ({ products, searchTerm }) => {

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
