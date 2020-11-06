import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios"


export default function Item(props) {
    const [datas, setData] = useState([])
    useEffect(() => {
        axios.get("http://34.101.191.163:38080/api/v1/products")
            .then(function (response) {
                const data = response.data
                setData(data)
                // dispatch(postLoginSuccess(response.data));
                console.log(response.data, "post")

                // history.push("/");
            })
            .catch(function (error) {
                console.error(error);
                // dispatch(postLoginFailure(id));
                alert("data tidak ditemukan")
            });
    }, [])
    const tes = (val) => {
        localStorage.setItem('id_detail', val)
    }

    return (
        <div className="row">
            {datas.content && datas.content.map((item, index) => (
                <div className="col-sm-2" key={item._id}>
                    <div className="card" style={{ width: '14rem', heigt: '10rem' }}>
                        <Link to={{ pathname: `detail/${item._id}`, state: item._id }}>
                            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/3/101971065/101971065_3de225dc-1c73-4c3e-8e7f-b7c75c4a3cd9_1280_1280" className="card-img-top" style={{ width: '14rem', height: '15rem' }} alt="..." />
                            {/* <img src={getGambar} className="card-img-top" style={{ width: '14rem', height: '10rem' }} alt="..." /> */}
                        </Link>
                        <div className="card-body text-left" >
                            <span className="card-title">{item.title}</span>
                            <div className="text-left">
                                <h6>IDR.{item.price}</h6>
                            </div>
                            <Link onClick={() => tes(item._id)} to={{ pathname: `/cart/${item._id}`, state: item._id }} >
                                <div className="text-center">
                                    <i className="fa fa-shopping-cart"></i><span className="badge badge-danger">Add to chart</span>
                                </div>
                            </Link>
                            {/* <small className="card-text">Description : {item.description}</small> */}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

