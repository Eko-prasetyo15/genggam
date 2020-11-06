import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Navbar(props) {
    var items = localStorage.getItem('tokenlogin')
    var role = localStorage.getItem('role') 
    const [log, setLog] = useState (true)
    const [hidden, setHidden] = useState (true)
    const handleLogOut = () => {
        localStorage.clear()
    }
    useEffect(() => {
        if (items) {
            setLog(false)
            setHidden(false)
        }
    },[items, log, hidden])
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "blue", color: "white" }}>
            <a className="navbar-brand" href="#">Nawisan</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Link to="/">
                        <li className="nav-item active">
                            <h7 className="nav-link"> Home </h7>
                        </li>
                    </Link>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Hubungi-Kami</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" style={{ width: "700px" }} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="button">Search</button>
                </form>
                <ul className="navbar-nav mr-auto">
                    <Link to="/add">
                        <li className="nav-item" 
                        >
                            {role !== 'customer' && !log? (
                                <h7 className="nav-link">+Add Product</h7>
                            ) : null }
                        </li>
                    </Link>
                    <Link to="/login">
                        <li className="nav-item">
                            {log ?
                                <h7 className="nav-link" >Login</h7> :
                                <h7 className="nav-link" onClick={() => { handleLogOut() }}>Logout</h7>}
                            {/* <a className="nav-link" >{log ? "Logout" : "Login"}</a> */}
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}