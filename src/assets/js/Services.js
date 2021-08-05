import React from 'react'
//import { BrowserRouter as Router, } from 'react-router-dom'

import Services1 from '../images/sevices.jpg'
import Services2 from '../images/services 2.jpg'
import Services3 from '../images/services3.jpg'
import Services4 from '../images/services4.jpg'
import Services5 from '../images/services5.jpg'
import Services6 from '../images/services6.jpg'
import Services7 from '../images/services7.jpg'
import Services8 from '../images/services8.jpg'

export default function Services() {

    return (
        <main id="Main_Services">
            <div className="services mt-5">
                <h2>Services we do</h2>
                <p className="h3">We analyse your working environment, designing systems to meet your business objectives.</p>
            </div>

            <div className="Services_we container">
                <section className="row">
                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services1} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title">Applications Development</h5>
                            <p className="card-text">We help create contextual user experience environments that
                                enable
                                interactions with your brand.</p>
                            <a href="application-development.html" className="btn">Read More</a>
                        </div>
                    </div>



                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services2} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title">Mobile Applications
                                Development</h5>
                            <p className="card-text">We are delivering Custom Mobile Application Development
                                Services
                                For Startups, Small Businesses</p>
                            <a href="mobile-application.html" className="btn">Read More</a>
                        </div>
                    </div>



                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services3} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title">Internet of things
                                (IoT)</h5>
                            <p className="card-text">Our Internet of Things services enables organizations to
                                transform
                                business needs into </p>
                            <a href="iot.html" className="btn">Read More</a>
                        </div>
                    </div>


                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services4} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title">Architecture</h5>
                            <p className="card-text mb-0">Enterprise Architecture helps business management achieve
                                its
                                strategic goals. It supports the company in creating competitive advantage,
                                reduces
                                risks </p>
                            <a href="architecture.html" className="btn">Read More</a>
                        </div>
                    </div>


                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services5} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title">Cloud Services</h5>
                            <p className="card-text pb-2">Whether you are beginning to or have already started your
                                cloud journey, a vendor-agnostic partner can accelerate</p>
                            <a href="cloud-services.html" className="btn">Read More</a>
                        </div>
                    </div>


                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services6} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title">Cyber Security</h5>
                            <p className="card-text pb-2">ISO/IEC 27001 is an Infosec Standard, NADSOL help you in
                                state
                                assessment, gap analysis and Certified. Our ISMS policies,</p>
                            <a href="cyber-security.html" className="btn">Read More</a>
                        </div>
                    </div>


                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services7} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title">Digital Marketing</h5>
                            <p className="card-text pb-2">As a Digital Marketing company, NADSOL Technologies
                                provides
                                entire services in promotions of products and brands.</p>
                            <a href="digital-marketing.html" className="btn">Read More</a>
                        </div>
                    </div>


                    <div className="card col-lg-3 col-md-4 bg-transparent">
                        <img src={Services8} className="card-img-top" alt="Application" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ marginBottom: '5px' }}>Application-Maintenance</h5>
                            <p className="card-text pb-2" style={{ paddingBottom: '0px' }}>NADSOL Techno Labs
                                offshore maintenance Services provides reliable and timely support to your
                                company.
                            </p>
                            <a href="application-maintenance.html" className="btn"
                                style={{ marginBottom: '18px', marginTop: '0px' }}>Read More</a>
                        </div>
                    </div>
                </section>
            </div >
        </main >
    )
}


