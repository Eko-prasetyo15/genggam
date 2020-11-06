import React, { useState, useEffect } from "react"
import Navbar from "../partial/navbar"
import Footer from "../partial/Footer"

import axios from "axios"
import { Link } from 'react-router-dom';

export default function Cart(props) {
    const { location } = props
    const [data, setData] = useState([])
    const [quantity, setQuantity] = useState("")
    const [total, setTotal] = useState("")

    console.log(location, "location")
    useEffect(() => {
        axios.get("http://34.101.191.163:38080/api/v1/products")
            .then(function (response) {
                const data = response.data
                setData(data.content)
                // dispatch(postLoginSuccess(response.data));
                console.log(response.data, "post")

                // history.push("/");
            })
            .catch(function (error) {
                console.error(error);
                // dispatch(postLoginFailure(id));
            });
    }, [])

    const onChangeQuantity = (e) => {
        console.log(e.target.value, "ini value")
        setQuantity(e.target.value)
    }

    let a = localStorage.getItem("id_detail")
    const val = data && data.find(i => i._id === a)
    const jumlah = parseInt(quantity) * parseInt(val && val.price)

    useEffect(() => {
        setTotal(jumlah)
    }, [total, quantity])
    const subTotal = total + 10000
    return (
        <>
            {console.log(val, "ini teh value")}
            {/* <img src="https://www.xmple.com/wallpaper/blue-white-gradient-linear-1920x1080-c2-1e90ff-ffffff-a-90-f-14.svg" style={{ width: '100%', height: '100%', position: 'absolute' }} /> */}
            <Navbar />
            <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: 'grey' }}>
                <div className="container">
                    <h1 className="display-4 text-center" style={{ color: 'black' }}>"NAWISAN,</h1>
                    <p className="lead text-center">sok gera daragang omat kudu aya batian montong no profit</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">total</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="col-sm-8 col-md-6">
                                        <div className="media">
                                            <a className="thumbnail pull-left" href="#"> <img className="media-object" src={`http://34.101.191.163:38080/uploads/${val && val.image}`} style={{ width: '100px', height: '100px' }} /> </a>
                                            <div className="media-body ml-4" >
                                                <strong><a href="#">{val && val.title}</a></strong>
                                                <div>
                                                    <strong className="media-heading"> by <a href="#">{val && val.brand}</a></strong>
                                                </div>
                                                <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                            </div>
                                        </div></td>
                                    <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                                        <input type="text" name="quantity" className="form-control" id="exampleInputEmail1" value={quantity} onChange={onChangeQuantity} />
                                    </td>
                                    <td className="col-sm-1 col-md-1 text-center"><strong>Rp.{val && val.price}</strong></td>
                                    <td className="col-sm-1 col-md-1 text-center"><strong>Rp{total}.</strong></td>
                                    <td className="col-sm-1 col-md-1">
                                        <button type="button" className="btn btn-danger">
                                            <span className="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                                </tr>
                                <tr>
                                    <td className="pl-0"><img src="https://teknoweb.id/wp-content/uploads/2019/11/all-kurir.png" style={{ width: '500px', height: '100px', padding: 0 }} /></td>
                                    <td></td>
                                    <td><h5>Estimated shipping</h5></td>
                                    <td className="text-right"><h5><strong>Rp.10000</strong></h5></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><h5>Sub total</h5></td>
                                    <td className="text-right"><h4><strong>Rp.{subTotal}</strong></h4></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                        {/* <button type="button" className="btn btn-default" href="/"> */}
                                        <Link to="/">
                                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </Link>
                                        {/* </button> */}
                                        </td>
                                    <Link to="/checkout">
                                        <td>
                                            <button type="button" className="btn btn-success">
                                                Checkout <span className="glyphicon glyphicon-play"></span>
                                            </button></td>
                                    </Link>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}