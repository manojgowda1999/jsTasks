import React, { useState } from 'react';
// import ProductList from './ProductList';
import ProductList from './ProductList';

// Mock data
const mockProducts = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' },
  { id: 4, name: 'Product D' },
  { id: 5, name: 'Product E' },
];

const Dashboard = () => {
  // Initialize state
  const [products] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle filter change 
 
  const handleFilter = event => {
    if(setSearchTerm(event.target.value )){

    }
  };
  // var notFound = document.getElementById('dataInput')
  // var errorMsg = document.getElementById('caption').style.display = 'none'
  // if (!notFound) {
  //   document.getElementById('caption').style.display = 'block';
  // }
  

  return (
    <div>
      <h1>Product Dashboard......</h1>
      <input
        type="text"
        id='dataInput'
        placeholder="Search for thhe products"
        value={searchTerm}
        onChange={handleFilter}
      />
      <ProductList products={products} searchTerm={searchTerm} />
    
   
   {/* <p id='caption'>Data is not found</p> */}
      
   
    </div>
  );
};

export default Dashboard;
