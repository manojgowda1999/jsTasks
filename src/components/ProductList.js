// import React from 'react';
// import ProductDetails from './productDetails';
// import Dashboard from './Dashboard';

// const ProductList = ({ products, searchTerm }) => {

 
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <ul>
//       {filteredProducts.map(product => (
//         <li key={product.id}>{product.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default ProductList;


import React from 'react';
// import Dashboard from './Dashboard';

const ProductList = ({ products, searchTerm, onAdd, onUpdate, onDelete }) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h2>Product List</h2>
      <ul className='card-container'>
        {filteredProducts.map(product => (
          <li>
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>

            {/* <button onClick={() => onUpdate({ ...product, title: product.title + " Updated" })}>Update</button> */}
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

