import React from 'react'
import { Link, } from 'react-router-dom'
export default function Menu() {

    return (<>
        {/* <div className="container-fluid menu"> */}
        <nav className="navbar navbar-expand-lg  bg-secondary mainnav">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <i className="fab fa-stripe-s"></i><i className="fab fa-stripe-s"></i><i
                                className="fab fa-stripe-s"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <h6><span>About</span><span>us</span></h6>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/assets/js/about">Know about us</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Testimonials">Testimonials</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Industries">Industries</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/team">Team</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <h6><span>Services</span><span></span></h6>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/assets/js/Services">Applications Development</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Services">Mobile Applications
                                Development</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Services">Internet of things
                                (IoT)</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Services">Architecture</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Services">Cloud Services</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Services">Cyber Security</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/assets/js/Clients">
                            <h6><span>Clients</span><span></span></h6>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/assets/js/newservices">
                            <h6><span>new</span><span></span></h6>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/assets/js/RBUI">
                            <h6><span>shop</span><span></span></h6>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Restapi">
                            <h6><span>Api</span><span></span></h6>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#Main_Careers" id="navbarDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6><span>Careers</span><span></span></h6>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/assets/js/Careers">MEAN Stack Developers</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Careers">ReactJS Developers</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Careers">PHP, CodeIgniter Developer</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Careers">Wordpress Developer</Link></li>
                            <li><Link className="dropdown-item" to="/assets/js/Careers">PHP, CodeIgniter Developer</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/assets/js/Adress">
                            <h6><span>Contact</span><span></span></h6>
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
        {/* </div> */}
    </>)
}