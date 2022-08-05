import React,{useEffect,useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import axios from 'axios'


const Cart = () => {
    const url4 = 'http://localhost:4000/cart/v3/cart'
 const { cart, setCart} = useContext(CartContext)

 //Carrito Completo
 const getItemsinCart = async() => {
  const res = await axios.get(url4)
  console.log(res.data)
setCart(res.data)
}

useEffect(()=>{
  getItemsinCart()
   },[]
)


  return (
    <div>
        <h1>Tu pedido: </h1>
       
        {
          !cart ? 'Cargando...' :
          cart.map((carrito,index) =>{
            return <div key={index}>
              <li>
                {carrito.name}
              </li>
              <li >
              ${carrito.price}
              </li>
          
      
            </div>
          })
        }
      
    </div>
  )
}

export default Cart