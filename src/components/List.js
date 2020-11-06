import React from "react"
import { Link } from "react-router-dom";

export default function List(props) {
    const { val } = props
    console.log(val, "ini item")
    return (
        <div className="col-sm-3">
            <div className="card" style={{ width: '18rem' }}>
                <Link to="/detail">
                    <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/3/101971065/101971065_3de225dc-1c73-4c3e-8e7f-b7c75c4a3cd9_1280_1280" className="card-img-top" style={{ width: '18rem', height: '15rem' }} alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <h5 className="card-title">{val.price}</h5>
                    <p className="card-text">{val.description}</p>
                </div>
            </div>
        </div>
    )
}
