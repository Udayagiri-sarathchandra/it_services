import React from 'react'
import Banner3 from '../images/it_banner3.jpg'
import Bannervideo from '../images/1.mp4'
import Banner5 from '../images/it_banner5.jpg'
//import { BrowserRouter as Router, } from 'react-router-dom'
export default function Carousel() {

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active first-carousel">
                    <img src={Banner3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <p>
                            Delivering new age digital technology
                            <br />
                            solutions to our clients makes their   <br />
                            customers happy
                        </p>
                    </div>
                </div>
                <div className="carousel-item  ">
                    <video autoPlay preload="auto" muted loop style={{ width: '100%' }} src={Bannervideo} type="video/mp4" />
                    {/* <img src={Banner3} className="d-block w-100" alt="..." /> */}
                    <div className="carousel-caption d-none d-md-block">
                        <p>
                            Accelerate your journey to a digital   <br />  enterprise with SS_TECH ’s Digital   <br />
                            Transformation practices.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Banner5} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <p>
                            Discover our range of flexible managed   <br />  IT services, offering tailored solutions <br /> to
                            meet your business objectives.
                        </p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}