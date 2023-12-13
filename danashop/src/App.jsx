import React from 'react'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Success from './pages/Success'
const App = () => {
  const user=false;
  return (
    <Router>
      
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products/:category' element={<Products />}></Route>
      <Route path='/product/:id' element={<Product />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/success' element={<Success />}></Route>
      <Route path='/login' element={user?<Navigate to='/'></Navigate>:<LogIn/>}>
      </Route>
      <Route path='/register' element={user?<Navigate to='/'></Navigate>:<Register/>}></Route>
    </Routes>
    </Router>
  )
}

export default App