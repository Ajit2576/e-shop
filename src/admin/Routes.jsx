import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProducts from './page/AdminProducts'
import AdminHome from './page/AdminHome'
import LeftBar from './components/LeftBar'
import Users from './page/Users'
import Orders from './page/Orders'
import NewProduct from './page/NewProduct'

function RoutesComp() {
    return (
        <div style={{ display: 'flex' }}>
            <LeftBar />
            <div style={{ width: '100%' }}>
                <Routes>
                    <Route path='/' element={<AdminHome />} />
                    <Route path='/products' element={<AdminProducts />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/new-product' element={<NewProduct/>} />
                </Routes>
            </div>
        </div>
    )
}

export default RoutesComp
