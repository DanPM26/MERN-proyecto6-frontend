import React,{useContext,useEffect} from 'react';
import { CartContext } from '../../Context/CartContext';
import {Button} from 'react-bootstrap';
import axios from 'axios'

const BtnAgregar = () => {
const {cart, setCart} = useContext(CartContext)
const url4 = 'http://localhost:4000/cart/v3/cart'

      const getItem = data =>{
    console.log('aqui esta la petición')
      }

  return (
    <div>
        <Button onClick={() => getItem()}>Agregar</Button>
    </div>
  )
}

export default BtnAgregar