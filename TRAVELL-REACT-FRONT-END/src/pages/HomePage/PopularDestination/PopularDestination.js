import React from 'react';

const PopularDestination = () => {
    return (
        <section>
            <div className="popularDestination">
                <div className="container">
                    <div className="sectionTitle">
                        <h2 className="sectionName">
                            Popular 
                            <span className="highlightPart"> Destination</span>
                            </h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="destination">
                                <img src="https://remap.travelerwp.com/wp-content/uploads/2018/12/photo-1494475673543-6a6a27143fc8-370x370.jpeg" alt="destinationImg" />
                                <span className="destinationName">California</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="destination">
                                <img src="https://remap.travelerwp.com/wp-content/uploads/2018/12/photo-1488805990569-3c9e1d76d51c-370x370.jpeg" alt="destinationImg" />
                                <span className="destinationName">Nevada</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="destination">
                                <img src="https://remap.travelerwp.com/wp-content/uploads/2018/12/photo-1505577058444-a3dab90d4253-370x370.jpeg" alt="destinationImg" />
                                <span className="destinationName">Los Angeles</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="destination">
                                <img src="https://remap.travelerwp.com/wp-content/uploads/2018/12/photo-1417721955552-a49ac2d334e8-370x370.jpeg" alt="destinationImg" />
                                <span className="destinationName">San Fransisco</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="destination">
                                <img src="https://remap.travelerwp.com/wp-content/uploads/2015/02/photo-1532323544230-7191fd51bc1b-370x370.jpeg" alt="destinationImg" />
                                <span className="destinationName">New Jarseo</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="destination">
                                <img src="https://remap.travelerwp.com/wp-content/uploads/2018/12/photo-1505576391880-b3f9d713dc4f-370x370.jpeg" alt="destinationImg" />
                                <span className="destinationName">Verginia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularDestination;