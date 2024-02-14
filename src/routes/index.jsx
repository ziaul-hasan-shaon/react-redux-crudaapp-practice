/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Erorr from '../Pages/Error'
import Navbar from '../Layout/Navbar'
import ViewFood from '../app/features/Foods/ViewFood'
import AddFood from '../app/features/Foods/AddFood'
import EditFood from '../app/features/Foods/EditFood'

function Index() {
    return (
        <div>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/displayfoods' element={<ViewFood></ViewFood>}></Route>
                    <Route path='/addfoods' element={<AddFood></AddFood>}></Route>
                    <Route path='/editfoods' element={<EditFood></EditFood>}></Route>
                    <Route path='*' element={<Erorr></Erorr>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Index
