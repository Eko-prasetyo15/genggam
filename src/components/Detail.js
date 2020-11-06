import React, { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../partial/navbar"
import Footer from "../partial/Footer"

import { Link } from "react-router-dom"
// import { loadProduct } from "../actions/action"
import "./register.css"

export default function Detail(props) {
    const { location } = props
    const [data, setData] = useState([])
    console.log(location, "location")
    useEffect(() => {
        axios.get("http://34.101.191.163:38080/api/v1/products")
            .then(function (response) {
                const datas = response.data
                setData(datas.content)
                // dispatch(postLoginSuccess(response.data));
                console.log(response.data.content, "post")
                // history.push("/");
            })
            .catch(function (error) {
                console.error(error);
                // dispatch(postLoginFailure(id));
            });
    }, [])

    console.log(data, "ini data")
    if (!location.state) {
        return null
    } else {
        localStorage.setItem("id_detail", location.state)
    }
    let e = localStorage.getItem("id_detail")
    const val = data && data.find(i => i._id === e)
 

    return (
        <>
            {console.log(val, "ini teh value")}
            <img src="https://www.xmple.com/wallpaper/blue-white-gradient-linear-1920x1080-c2-1e90ff-ffffff-a-90-f-14.svg" style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <Navbar />
            {/* {data && data.find(() => (
                (index.id === location.id)
            ))} */}
            <div className="container">
                <div className="card-detail">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={`http://34.101.191.163:38080/uploads/${val && val.image}`} style={{width: '300px'}}/></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{val && val.title}</h3>
                                <h4 className="price">price: <span>{val && val.price}</span></h4>
                                <p className="vote">{val && val.description}</p>
                                <h5 className="sizes">sizes:
                                <span className="size" data-toggle="tooltip" title="small">{val && val.size[0]}</span>||
                                    <span className="size" data-toggle="tooltip" title="medium">{val && val.size[1]}</span>||
                                    <span className="size" data-toggle="tooltip" title="large">{val && val.size[2]}</span>||
                                    {/* <span className="size" data-toggle="tooltip" title="xtra large">{val && val.size[3]}</span> */}
                                </h5>
                                {/* <Link to="/cart"> */}
                                <Link to={{ pathname: `/cart/${e}`, state: e }}>
                                    <div className="action">
                                        <button className="add-cart btn btn-danger col-5" type="button"><i className="fa fa-shopping-cart"></i>add to cart</button>
                                        <button className="update btn btn-primary col-5" type="button"><i className="fa fa-shopping-cart"></i>Update Product</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}