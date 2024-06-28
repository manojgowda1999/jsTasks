import React from 'react';
import productDetails from './components/productDetails';
import dashBoard from './components/Dashboard';
import ProductPage from './components/productPage';
import JSXBasics from './components/JSXBasics'; 
import useStateChild from './components/useStateChild';
import useStateParent from './components/useStateParent';
import Dashboard from './components/Dashboard';




const App = () => {
  return (
    <div className="App">
      {/* <ProductPage></ProductPage> */}
      {/* <ProductDetails></ProductDetails> */}
      {/* <JSXBasics></JSXBasics> */}
      {/* <useStateChild></useStateChild> */}
      {/* <useStateParent></useStateParent>
      <useStateChild></useStateChild> */}
      <Dashboard></Dashboard>
  
    </div>
  );
};

export default App;