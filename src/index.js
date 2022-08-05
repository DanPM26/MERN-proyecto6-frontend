import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { 
  BrowserRouter,
  Route, 
  Routes 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartProvider';
import {ProductProvider} from './Context/ProductProvider'
import { UserProvider } from './Context/UserProvider';
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart'
import { PayPalScriptProvider} from '@paypal/react-paypal-js'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ProductProvider>
   
    <UserProvider>
    <CartProvider>
      <PayPalScriptProvider 
      options={{"client-id": "AerfiBs7JetNl5OLlriJSzGuFAQX0kN11lRYCdw2FA4zYNAPg6pSTsAnjaIFO57MTD4ILS3kFVnupk6U",
      components: "buttons",
      currency: "MXN"
    }}
      >
    <BrowserRouter>
    <App />
    <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/profile' element={<Profile />}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/singup' element={<SingUp />}></Route>
     <Route path='/products' element={<Products />}></Route>
     <Route path='/cart' element={<Cart />}></Route>
    
    </Routes>
    </BrowserRouter>
      </PayPalScriptProvider>
      </CartProvider>
    </UserProvider>
    </ProductProvider>
  </React.StrictMode>
);


