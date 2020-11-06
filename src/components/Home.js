import React, { useEffect } from 'react';
import Navbar from "../partial/navbar"
import Carousel from "../partial/carousel"
import Footer from "../partial/Footer"
import Item  from "./Item"
import { loadProduct } from "../actions/action"



export default function Header(props) {
    useEffect(() => {
        loadProduct()
        localStorage.removeItem('id_detail')
    },[])
    
    return (
        <div style={{ backgroundColor: '#fff' }}>
           <Navbar/>
           <br></br>
            <Carousel/>
            <br></br>
            <br></br>
            <div className="container text-center mr-5 ml-5">
            <Item/>
            </div>
            <br></br>
            <br></br>
            <div className="card">
            <Footer/>
            </div>
        </div>

    )
}