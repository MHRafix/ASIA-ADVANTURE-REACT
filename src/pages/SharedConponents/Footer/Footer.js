import React from 'react';
import Logo from '../../../logo.png';

const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footerSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                               <div className="logoArea">
                                   <img src={Logo} alt="logo" /> <br /> <br />
                                   <p className="desc">Hello every one. We'are Asia Advanture Limited. We;re travel planner and package provider. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, enim.</p>
                               </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="agentsArea">
                                    <h3 className="agencys">Agencies</h3>
                                    <span className="agent">Dhaka</span> <br />
                                    <span className="agent">Chattogram</span> <br />
                                    <span className="agent">Cumilla</span> <br />
                                    <span className="agent">Noakhali</span> <br />
                                    <span className="agent">Lakshmipur</span> <br />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="agentsArea">
                                    <h3 className="agencys">Services</h3>
                                    <span className="agent">Booking</span> <br />
                                    <span className="agent">RentalCar</span> <br />
                                    <span className="agent">HostelWorld</span> <br />
                                    <span className="agent">Trivago</span> <br />
                                    <span className="agent">TripAdvisor</span> <br />
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;