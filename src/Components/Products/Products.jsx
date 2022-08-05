import React from 'react';
import BtnAgregar from '../BtnAgregar/BtnAgregar';
import axios from 'axios'
import { useEffect, useContext} from 'react'
import { ProductContext } from '../../Context/ProductContext';



function Products() {
  const url3 = 'http://localhost:4000/store/v2/product'
const { products, setProducts } = useContext(ProductContext)

// Productos
const getProducts = async() =>{
     const res = await axios.get(url3);
   setProducts(res.data)
}
useEffect(()=>{
 getProducts()

  },[]
)


  return (
    <div>
      <h1>Productos</h1>
    
      {
          
          !products ? 'Cargando...' :
          products.map((product,i) =>{
            return <div key={i}>
              <li>
                {product.name}
              </li>
              <li >
              ${product.price}
              </li>
          <BtnAgregar />
            </div>
          })
         
        }
      
    
    </div>
  )
}

export default Products