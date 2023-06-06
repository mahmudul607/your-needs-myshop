
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoToTop from './components/GoToTop/GoToTop';

import News from './components/News/News';
import Seller from './components/Seller/Seller';
import Product from './components/Product/Product';
import { createContext, useState } from 'react';
import { addToDatabaseCart } from './utilities/databaseManager';
import fakeData from './fakeData';
export const AddProductContext = createContext();

function App() {
  const product = fakeData;
  const [cart, setCart] = useState([]);


  const handleAddProduct = (product) =>{
    const sameProduct = cart.find(pd => pd.key === product.key);
  let count = 1;
  let newCart;
  if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== product.key);
      newCart = [...others, sameProduct];
  }
  else {
      product.quantity = 1;
      newCart = [...cart, product];
  }
    
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  }
  return (
    <AddProductContext.Provider value={[handleAddProduct, product]}>
        <BrowserRouter>
      <>
          <Header cart={cart}></Header>
          <Routes>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/product" element={<Product handleAddProduct={handleAddProduct} product={product}></Product>}/>
          <Route path="/seller" element={<Seller/>}/>
          <Route path="/news" element={<News/>}/>
              
              

          </Routes>
          <Footer></Footer>
          <GoToTop></GoToTop>
      
      </>
      </BrowserRouter>
    </AddProductContext.Provider>
   
  );
}

export default App;
