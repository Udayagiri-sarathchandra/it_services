import React from 'react'
//import { BrowserRouter as Router, } from 'react-router-dom'
import Client1 from '../images/11.png'
import Client2 from '../images/4.png'
import Client3 from '../images/5.png'
import Client4 from '../images/6.png'
import Client5 from '../images/5.png'
import Client6 from '../images/6.png'
import Client7 from '../images/7.png'
import Client8 from '../images/9.png'
export default function Clients() {

    return (
        <main id="Main_Clients">
            <div className="services mt-5">
                <h2>Our Clients</h2>
                <p className="h3">We analyse your working environment, designing systems to meet your business objectives.</p>
            </div>
            <div className="container">
                <section className="row">


                    <div className=" col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client1} alt=""></img>
                    </div>

                    <div className=" col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client2} alt=""></img>
                    </div>

                    <div className=" col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client3} alt=""></img>
                    </div>


                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client4} alt=""></img>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                        <img src={Client5} alt=""></img>
                    </div>


                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                        <img src={Client6} alt=""></img>
                    </div>


                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client7} alt=""></img>
                    </div>


                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client8} alt=""></img>
                    </div>

                    <div className=" col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client1} alt=""></img>
                    </div>

                    <div className=" col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client3} alt=""></img>
                    </div>

                    <div className=" col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client5} alt=""></img>
                    </div>


                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img src={Client8} alt=""></img>
                    </div>
                </section>
            </div>
        </main>
    )
}