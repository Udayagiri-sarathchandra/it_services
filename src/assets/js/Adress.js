import React from 'react'
import Img1 from './../images/charminar.png'
import Img2 from './../images/dubai.png'
import Img3 from './../images/canada.png'
//import { BrowserRouter as Router, } from 'react-router-dom'
export default function Address() {

    return (
        <div className="container address">
            <div className="row manual-mt text-light text-center ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 india bg-secondary">
                    <img src={Img1} alt="Charminar" />
                    <h4>India</h4>
                    <p>
                        Near Trishul Grand Hotel, Hi-Tech City <br />
                        Madhapur, Hyderabad - 500081 <br />
                        Telangana State, INDIA. <br />
                        Contact: 040-49525958, +91-9849120930 <br />
                        Email: info@sss.com, haranath@sss.com
                    </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 dubai bg-dark">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 contact-layer">

                        <img src={Img2} alt="dubai" />
                        <h4>Dubai</h4>
                        <p>
                            Post box: 43855 <br />
                            Dafza, United Arab Emirates (UAE). <br />
                            Email: maria@sss.com
                        </p>

                    </div>
                </div>

            </div>
            <div className="row text-center text-light ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 dubai bg-dark">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 contact-layer">

                        <img src={Img2} alt="dubai" />
                        <h4>Dubai</h4>
                        <p>
                            Post box: 43855 <br />
                            Dafza, United Arab Emirates (UAE). <br />
                            Email: maria@sss.com
                        </p>

                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 canada  bg-secondary">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 contact-layer">

                        <img src={Img3} alt="canada" />
                        <h4>Canada</h4>
                        <p>
                            2233 Argentia road, Suite #302, East tower, <br /> Mississauga, Ontario, Canada, L5N 6A6.
                            <br />
                            Email: shiva.kukatla@sss.com
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}