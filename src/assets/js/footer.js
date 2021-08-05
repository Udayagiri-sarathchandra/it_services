import React from 'react'
//import { Link, } from 'react-router-dom'
import Mic from '../images/microsoft.png'
import Ang from '../images/angular.png'
import Aws from '../images/aws.png'
import Nodejs from '../images/nodejs.png'
export default function Menu() {

    return (
        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-3 col-md  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                        {/* <!--headin5_amrc--> */}
                        <p className="mb10">Plot no -28, cloud9homes, Sarath_Sree_solutions, Madhapur, HiTech city, Hyderabad
                            531021,
                            Telagana</p>
                        <p><i className="bi bi-telephone"></i> +91 7730869643
                        </p>
                        <p><i className="bi bi-telephone"></i> +91-9999878398 </p>
                        <p><i className="bi bi-envelope"></i> SarathSreeSolutions@sss.com </p>
                    </div>


                    <div className=" col-sm-3 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Our Expertise:</h5>
                        {/* <!--headin5_amrc--> */}
                        <ul className="footer_ul_amrc">
                            <li><img src={Mic} alt="" /></li>
                            <li><img src={Ang} alt="" /></li>

                        </ul>
                        {/* <!--footer_ul_amrc ends here--> */}
                    </div>


                    <div className=" col-sm-3 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2"></h5>
                        {/* <!--headin5_amrc--> */}
                        <ul className="footer_ul_amrc ">
                            <li><img src={Aws} alt="" /></li>
                            <li><img src={Nodejs} alt="" /></li>

                        </ul>
                        {/* <!--footer_ul_amrc ends here--> */}
                    </div>


                    <div className=" col-sm-3 col-md  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                        {/* <!--headin5_amrc ends here--> */}

                        <ul className="footer_ul2_amrc">
                            <li><a href="#"><i className="bi bi-facebook"></i></a>
                                <p>Facebook<a href="#">SkyEndTravels.html.facebook</a>
                                </p>
                            </li>
                            <li><a href="#"><i className="bi bi-youtube"></i></a>
                                <p>youtube<a href="#">SkyEndTravels.html.youtube</a>
                                </p>
                            </li>
                            <li><a href="#"><i className="bi bi-instagram"></i></a>
                                <p>instagram<a href="#">SkyEndTravels.html.insta</a>
                                </p>
                            </li>
                        </ul>
                        {/* <!--footer_ul2_amrc ends here--> */}
                    </div>
                </div>
            </div>


            {/* <div className="container">
                <ul className="foote_bottom_ul_amrc">
                    <li><a href="#Home"> Home </a></li>
                    <li><a href="#About"> About </a></li>
                    <li><a href="#Events"> Events </a></li>
                    <li><a href="#Guides"> Guide </a></li>
                    <li><a href="#Contact"> Contact </a></li>
                    <li><a href="#Shop"> Shop </a></li>
                </ul> */}
            {/* <!--foote_bottom_ul_amrc ends here--> */}
            {/* <p className="text-center">Travel with us "Come Fly with me to the end of the Sky" <a href="#">SkyEnd
                    Travels</a>
                </p>

                <ul className="social_footer_ul">
                    <li><a href="SkyEndTravels.html"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="SkyEndTravels.html"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="SkyEndTravels.html"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="SkyEndTravels.html"><i className="bi bi-instagram"></i></a></li>
                </ul> */}
            {/* <!--social_footer_ul ends here--> */}
            {/* </div> */}

        </footer >
    )
}