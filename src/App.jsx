import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function App() {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-">
  <div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
         <NavLink to="/">
         <Button variant="light">Home</Button>{' '}
        </NavLink>
        <NavLink to="/singup">
        <Button variant="light">SingUp</Button>{' '}
        </NavLink>
        <NavLink to="/login">
        <Button variant="light">Login</Button>{' '}
        </NavLink>
        <NavLink to="/products">
        <Button variant="light">Productos</Button>{' '}
        </NavLink>
        <NavLink to="/cart">
        <Button variant="light">Carrito</Button>{' '}
        </NavLink>
  
                  
      </ul>
      </div>
    </div>
  </nav>
  
  
  </>
  );
}

export default App;
