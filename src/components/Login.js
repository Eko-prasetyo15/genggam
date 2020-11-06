import React, { useState } from "react"
import { Link } from "react-router-dom"
import {login} from "../actions/action"
import history from "../history";
import "../assets/css/login.css"

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e) => {
        console.log(e.target.value, "email")
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        console.log(e.target.value, "password")
        setPassword(e.target.value)
    }

    const HandleSubmit = () => {
     login(email, password)
     history.push("/")
    }

    return (
        <>
            <img src="https://www.carmatec.ae/wp-content/uploads/2018/11/ecommerce-banner.png" style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-8">
                        <Link to="/">
                            <h1 className="rounded" style={{ color: 'blue', cursor: 'pointer', paddingTop: '20px' }}>{'<< Back'}</h1>
                        </Link>
                        <div className="account-wall">
                            <img className="profile-img" src="https://ecs7-p.tokopedia.net/img/cache/215-square/shops-1/2020/5/3/8478283/8478283_02c1eb27-a75b-47b9-a63e-8092101cb7bf.jpg" alt="" />
                            <form className="form-signin">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    onChange={onChangeEmail}
                                    required autoFocus />
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={onChangePassword}
                                    required />

                                <button className="btn btn-lg btn-primary btn-block" type="button"
                                    onClick={() => { HandleSubmit() }} >
                                    Sign in</button>
                                <label className="checkbox pull-left">
                                    <input type="checkbox" value="remember-me" />
                                                    Remember me
                                    </label>
                                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                            </form>
                        </div>
                        <a href="/register" className="text-center new-account">Create an account </a>
                    </div>
                </div>
            </div>
        </>
    )
}