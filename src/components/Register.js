import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Registration } from "../actions/action"
import history from "../history";

export default function Register(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRoles] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeRoles = (e) => {
        console.log(e.target.value, "roles")
        setRoles(e.target.value)
    }

    const handleSubmit = () => {
        Registration(name, email, password, role)
        history.push('/login')
    }

    return (
        <>
            <img src="https://www.xmple.com/wallpaper/blue-white-gradient-linear-1920x1080-c2-1e90ff-ffffff-a-90-f-14.svg" style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <div className="">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6 col-md-4 col-md-offset-1">
                        <div className="account-wall">
                            <img className="profile-img" src="https://ecs7-p.tokopedia.net/img/cache/215-square/shops-1/2020/5/3/8478283/8478283_02c1eb27-a75b-47b9-a63e-8092101cb7bf.jpg" alt="" />
                            <form className="col-md-12">
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                    </div>
                                    <input name="name" className="form-control" placeholder="Full name" type="text" onChange={onChangeName}/>
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                    </div>
                                    <input name="email" className="form-control" placeholder="Email address" type="email" onChange={onChangeEmail}/>
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input name="password" className="form-control" placeholder="Create password" type="password" onChange={onChangePassword} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <select name="role" className="custom-select" style={{ width: '120px' }} onChange={onChangeRoles}>
                                        <option selected>Pilih</option>
                                        <option value="seller">Seller</option>
                                        <option value="customer">Customer</option>
                                    </select>
                                </div>
                                <div className="text-right">
                                    <button className="btn btn-success" onClick={() => { handleSubmit() }}>Send</button>
                                </div>
                                <p className="text-center">
                                    <Link to="/">
                                        <a className="text-center" style={{ color: 'white', cursor: 'pointer', paddingTop: '20px' }}>{'<< Back'}</a>
                                    </Link>
                                     Have an account? <a href="/login" style={{ color: 'white' }}>Log In</a> </p>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
