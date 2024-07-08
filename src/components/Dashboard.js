// import React, { useState } from 'react';
// import ProductList from './ProductList';

// const mockProducts = [
//   { id: 1, name: 'Product A' },
//   { id: 2, name: 'Product B' },
//   { id: 3, name: 'Product C' },
//   { id: 4, name: 'Product D' },
//   { id: 5, name: 'Product E' },
// ];

// const Dashboard = () => {
 
//   const [products] = useState(mockProducts);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleFilter = event => {
//     if(setSearchTerm(event.target.value )){

//     }
//   };
//   // var notFound = document.getElementById('dataInput')
//   // var errorMsg = document.getElementById('caption').style.display = 'none'
//   // if (!notFound) {
//   //   document.getElementById('caption').style.display = 'block';
//   // }
  

//   return (
//     <div>
//       <h1>Product Dashboard......</h1>
//       <input
//         type="text"
//         id='dataInput'
//         placeholder="Search for thhe products"
//         value={searchTerm}
//         onChange={handleFilter}
//       />
//       <ProductList products={products} searchTerm={searchTerm} /> 
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleFilter = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
  };

// console.log("here is the output"+ products);
let results = products.forEach((ele)=> {
  console.log(ele.title);

})

// console.log( "here is the" + results);


  const handleUpdate = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <div className='header-content'>
      <h1>Product Dashboard</h1>
      <input 
        type="text" 
        className='form-control'
        placeholder="Search for item" 
        value={searchTerm} 
        onChange={(e) => handleFilter(e.target.value)} 
      />
        </div>
      <ProductList 
        products={products} 
        searchTerm={searchTerm}
        onAdd={handleAdd}
        // onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
  
    </div>
  );
};

export default Dashboard;
