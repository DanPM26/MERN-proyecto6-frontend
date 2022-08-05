import {useState} from 'react';
import {ProductContext} from './ProductContext';


export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);


  return (
    <ProductContext.Provider value={{products,setProducts}}>
      {children}
    </ProductContext.Provider>
  )
}