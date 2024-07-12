import React, { useState } from 'react';
import SearchInput from './SearchInput';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Shirt' },
    { id: 2, name: 'Hat' },
    { id: 3, name: 'Shoes' },
    {id : 10, name : 'Pant'},
    {
      id : 11, 
      name : 'Inners'
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput onSearchChange={handleSearchChange} /> {/* Pass handleSearchChange as a prop */}
      <div className='main-container'>
      <h2>Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}   className='list-items form-control' >{product.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Products;
