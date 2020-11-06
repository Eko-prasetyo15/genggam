import React from "react"

export default function Footer() {
    return (
        <>
            <img src="https://wallpapercave.com/wp/wp5523714.png" style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 widget">
                        <h2 className="widget_title ">Our Services</h2>
                        <ul>
                            <li><a>Web Design and Development</a></li>
                            <li><a>SEO & SMO SERVICE</a></li>
                            <li><a>Custom Software Development</a></li>
                            <li><a>Motion Graphics</a></li>
                            <li><a>Corporate Branding</a></li>
                            <li><a>Graphic Designing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 widget">
                        <h2 className="widget_title ">Quick Links</h2>
                        <ul >
                            <li><a href="/">Home</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/login">login</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=081395294204">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 widget">
                        <h2 className="widget_title">Contact Us</h2>
                        <div className="row1">Thanks for visiting our site</div>
                        <div className="row2">
                            <strong>Address:</strong> [ Kp. Tenjolaya 04/05 Kab. Bandung ]
				</div>
                        <div className="row3">
                            <strong>Email us:</strong> prasetyoeko822@gmail.com
				</div>
                        <div className="row4">
                            <strong>Contact us:</strong> +62 81395294204
				</div>
                        <div className="col-md-12 text-left">
                            <a className="mr-4" href="https://www.facebook.com/profile.php?id=1585852810"><i className="fa fa-facebook"></i></a>
                            <a className="mr-4" href="https://www.linkedin.com/in/ekoprasetyopermadi/"><i className="fa fa-linkedin"></i></a>
                            <a className="mr-4" href="javascript:void(0)"><i className="fa fa-twitter"></i></a>
                            <a className="mr-4" href="javascript:void(0)"><i className="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
                )
}