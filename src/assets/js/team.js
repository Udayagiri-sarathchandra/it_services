import React from 'react'
//import { BrowserRouter as Router, } from 'react-router-dom'
import Team1 from '../images/profile.jpg'
export default function Team() {

    return (<>
        <main id="Main_Team">
            <div className="services mt-5">
                <h2>Our Team</h2>
                <p>
                    “Keep it simple – always”
                </p>
            </div>
            <div className="container">
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3 bg-transparent" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <button className="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
                            type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">CEO</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                            aria-selected="false">CTO</button>
                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                            aria-selected="fzalse">BD</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false">VP</button>
                        <button className="nav-link" id="v-pills-md-tab" data-bs-toggle="pill" data-bs-target="#v-pills-md"
                            type="button" role="tab" aria-controls="v-pills-md" aria-selected="false">MD</button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                            aria-labelledby="v-pills-home-tab">
                            <div className="row  text-white">
                                <div className="col-lg-8">
                                    <p>
                                        <h1 className="text-warning">Sarath <span className="text-Warning">Sree</span></h1>

                                        <h2>Founder & CEO</h2>

                                        <h5>Sree is a serial entrepreneur with a passion for synthesizing technology with
                                            marketing
                                            ideas to create disruptive software that solves business problems.

                                            In addition to providing Tecra’s vision, strategy and direction, Giri’s ability to
                                            coalesce
                                            talented teams and lead them towards a common goal is the catalyst that brings
                                            customer
                                            dreams to reality. His day-to-day relationships with customers and industry leaders
                                            provide
                                            him the insight to uncover pain points and provide creative and cost-effective
                                            solutions.

                                            Giri is a frequent speaker and panelist at industry events and conferences.</h5>

                                        <h3>“Keep it simple – always”</h3>
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <img src={Team1} width="75%" alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className=" tab-pane fade" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab">
                            <div className="row  text-white">
                                <div className="col-lg-8">
                                    <p>
                                        <h1 className="text-warning">Sreevathsa</h1>

                                        <h2>Co-founder and CTO</h2>

                                        <h5>Sreevathsa steers the technology direction and implementation at Tecra. He is
                                            instrumental in developing Tecra’s highly reliable and adaptive software platforms.

                                            Vijay’s core strength lies in listening to customers and translating their needs
                                            into elegant software solutions based upon their unique requirements. He is happiest
                                            at a whiteboard collaborating with team members and clients on how to build and
                                            implement solutions that solve critical business problems.

                                            When Vijay isn’t architecting software, he is hiking, running or traveling. He’s
                                            been known to run more than a few miles for a good craft beer.</h5>

                                        <h3>“Work smart, play hard"</h3>
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <img src={Team1} width="75%" alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                            aria-labelledby="v-pills-messages-tab">
                            <div className="row text-white">
                                <div className="col-lg-8">
                                    <p>
                                        <h1 className="text-warning">Rod Lowe</h1>

                                        <h2>Minister of Business Development</h2>

                                        <h5>Rod’s career has focused on incubating and growing high tech start-ups. This
                                            expertise allows him to focus on making Tecra offerings usable as well as helping
                                            customers recognize new business and revenue opportunities.

                                            Rod’s sales, technical support and business development background helps him
                                            evaluate customer requirements, recommend appropriate solutions and implement with
                                            confidence to achieve customer success and satisfaction.</h5>

                                        <h3>“I’m intrigued by the social impact of technology on humans”</h3>
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <img src={Team1} width="75%" alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                            aria-labelledby="v-pills-settings-tab">
                            <div className="row  text-white">
                                <div className="col-lg-8">
                                    <p>
                                        <h1 className="text-warning">Sai Parvataneni</h1>

                                        <h2>Vice President, Application Development</h2>

                                        <h5>Sai continually engages with customers throughout their Tecra partnership. Beginning
                                            with their concept and requirements, Sai manages the entire project lifecycle, be it
                                            simple or complex, by setting up processes that are easy to execute and control.

                                            Sai developed Tecra’s unique methodology for governing each step of product
                                            development. His vast experience with a variety of customer installations enables
                                            him to bring that knowledge to other clients.</h5>

                                        <h2>“My mantra is automation and self-service with minimal IT support” </h2>
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <img src={Team1} width="75%" alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-md" role="tabpanel" aria-labelledby="v-pills-md-tab">
                            <div className="row  text-white">
                                <div className="col-lg-8">
                                    <p>
                                        <h1 className="text-warning">Kris Gondi</h1>

                                        <h2>Managing Director & Co-founder Tecra India</h2>

                                        <h5>Kris is a visionary and provides the driving force for Tecra India’s young,
                                            high-spirited and motivated team in achieving great heights. He has more than 20
                                            years of senior management experience in technology. His vision has helped Tecra
                                            India to grow steadily and organically from a small offshore outsourcing operation
                                            to a multi-site operation.

                                            Kris is a serial entrepreneur and prior to co-founding Tecra in India, he was the
                                            Founder and Managing Director of EDSS Pvt. Ltd., which he organically scaled it to a
                                            few hundred employees before being acquired by a British company. He worked earlier
                                            with Ford Motor Company in Detroit prior to starting his companies in India. Kris
                                            holds a Masters in Computer Science from Wayne State, MI, USA.

                                            Kris also serves as an independent director on the board of a public company that
                                            has manufacturing units in 8 different countries.</h5>

                                        <h2></h2>
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <img src={Team1} width="75%" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>)
}