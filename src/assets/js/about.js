import React from 'react'
//import { BrowserRouter as Router, } from 'react-router-dom'
import Ab1 from '../images/creative-think.png'
import Ab2 from '../images/customers.png'
import Ab3 from '../images/services.png'
import Ab4 from '../images/resource.png'
import Ab5 from '../images/business.png'

export default function About() {

    return (<>
        <main id="Main_About">
            <div className="container-fluid about">
                <div className="row">
                    <div className="about-text p-5 col-lg-expand">
                        <h2>
                            About SS_TECH
                        </h2>
                        <p>
                            Our innovative IT Solutions in Application Development, Mobile Application
                            Development, Enterprise Resource Planning (ERP), Content Management System
                            (CMS), Cloud Solutions, Experience Design, IOT, Cyber Security and
                            Enterprise Applications that cover Product Development and Life-Cycle
                            Support, have resulted in significant strategic and cost advantage for our
                            clients. SS_TECH has strong domain expertise, global work culture and
                            technical excellence help companies to get ahead and be ready for future.
                        </p>

                        <a href="about.html" className="btn btn-read">Read More</a>

                    </div>
                </div>

                <div className="container-fluid about-bg-section">
                    <div className="row m-0">
                        <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 uniq-col-5">
                            <p>
                                <h6 className="text-center"><span>We</span>Are<span>Unique</span></h6>
                            </p>
                        </div>
                        <div className="col-xl-9 col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 uniq-col-7">
                            <div className="row ">
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 bg-services"
                                    id="About_icon">
                                    <img src={Ab1} alt="" />
                                    <p className="h6">
                                        Creative Thinking
                                    </p>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 bg-services"
                                    id="About_icon">
                                    <img src={Ab2} alt="" />
                                    <p className="h6">
                                        50+ Happy Customers
                                    </p>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 bg-services"
                                    id="About_icon">
                                    <img src={Ab3} alt="" />
                                    <p className="h6">
                                        Robust Services
                                    </p>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 bg-services"
                                    id="About_icon">
                                    <img src={Ab4} alt="" />
                                    <p className="h6">
                                        Experienced Resource
                                    </p>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 bg-services"
                                    id="About_icon">
                                    <img src={Ab5} alt="" />
                                    <p className="h6">
                                        80% Repeat Business
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </>)
}