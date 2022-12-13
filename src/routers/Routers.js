import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ProductDetails from '../pages/ProductDetails'

const Routers = () => {
  return (
	<Routes>
		<Route path='home' element={<Home/>}/>
		<Route path='shop' element={<Shop/>}/>
		<Route path='shop/:id' element={<ProductDetails/>}/>
		<Route path='cart' element={<Cart/>}/>
		<Route path='checkout' element={<Checkout/>}/>
		<Route path='login' element={<Login/>}/>
		<Route path='signup' element={<SignUp/>}/>
	</Routes>
    )
}

export default Routers