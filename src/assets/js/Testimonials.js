import React from 'react'
//import { BrowserRouter as Router, } from 'react-router-dom'
import Test1 from '../images/test1.jpeg'
import Test2 from '../images/test3.jpg'
import Test3 from '../images/test5.jpg'
import Test4 from '../images/test8.jpeg'
import Test5 from '../images/test2.jpg'
import Test6 from '../images/test7.jpg'

export default function Testimonials() {

    return (
        <main id="Main_Testimonials">
            <div className="services mt-5">
                <h2>Testimonials</h2>
                <p className="h3">"What people say about us?"</p>
            </div>

            <div className="container mt-5">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <section className="row test1 mx-5">



                                <div className="card  col-lg-4  col-sm-4  ">
                                    <img src={Test1} className="card-img-top" alt="Application" />
                                    <div className="card-body">
                                        <h5 className="card-title">Warren Buffet</h5>
                                        <p className="card-text">You made it so simple. My new site is so much faster and easier
                                            to
                                            work with than my old site.</p>

                                    </div>
                                </div>



                                <div className="card   col-lg-4 col-sm-4 ">
                                    <img src={Test2} className="card-img-top" alt="Application" />
                                    <div className="card-body">
                                        <h5 className="card-title">Sundar Pichai</h5>
                                        <p className="card-text">I just wanted to let you know that it’s been great working with
                                            you.</p>

                                    </div>
                                </div>



                                <div className="card   col-lg-4  col-sm-4 ">
                                    <img src={Test3} className="card-img-top" alt="Application" />
                                    <div className="card-body">
                                        <h5 className="card-title">Ratan Tata</h5>
                                        <p className="card-text">You guys are the best! Keep up the great work! </p>

                                    </div>
                                </div>


                            </section>
                        </div>

                        <div className="carousel-item ">
                            <section className="row test2 mx-5">



                                <div className="card  col-lg-4 col-md-4 col-sm-4">
                                    <img src={Test4} className="card-img-top" alt="Application" />
                                    <div className="card-body">
                                        <h5 className="card-title">Jeffrey Preston Bezos </h5>
                                        <p className="card-text">You made it so simple. My new site is so much faster and easier
                                            to
                                            work with than my old site.</p>

                                    </div>
                                </div>



                                <div className="card   col-lg-4 col-md-4 col-sm-4">
                                    <img src={Test5} className="card-img-top" alt="Application" />
                                    <div className="card-body">
                                        <h5 className="card-title">Doug Parker </h5>
                                        <p className="card-text">I just wanted to let you know that it’s been great working with
                                            you.</p>

                                    </div>
                                </div>



                                <div className="card   col-lg-4 col-md-4 col-sm-4">
                                    <img src={Test6} className="card-img-top" alt="Application" />
                                    <div className="card-body">
                                        <h5 className="card-title">Jeffrey Preston Bezos</h5>
                                        <p className="card-text">You guys are the best! Keep up the great work! </p>

                                    </div>
                                </div>


                            </section>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </main>
    )
}