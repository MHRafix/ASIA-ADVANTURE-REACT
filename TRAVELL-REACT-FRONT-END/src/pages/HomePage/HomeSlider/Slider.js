import React from 'react';

const Slider = () => {
    return (
        <section>
            <div className="homeSlider">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{
                        backgroundImage: "linear-gradient(rgb(0 0 0 / 52%), rgb(0 0 0)), URL('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=820&q=80')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                        }}>
                          <div className="container">
                             <div className="sliderDetail">
                            <h2 className="sliderName">let's disover the world <br /> most amzing places.</h2>
                            <p className="desdc">Join with us today at a discount rate.</p>
                            <button className="regularBtn">Book Packages</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" style={{
                        background: "linear-gradient(rgb(0 0 0 / 52%), rgb(0 0 0)), URL('https://image.freepik.com/free-photo/beautiful-shot-sunset-pier-zanzibar-east-africa_181624-7362.jpg')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                        }}>
                         <div className="container">
                         <div className="sliderDetail">
                            <h2 className="sliderName">let's disover the world <br /> most amzing places.</h2>
                            <p className="desdc">Join with us today at a discount rate.</p>
                            <button className="regularBtn">Book Packages</button>
                        </div>
                        </div>
                    </div>

                    <div className="carousel-item" style={{
                        background: "linear-gradient(rgb(0 0 0 / 52%), rgb(0 0 0)), URL('https://image.freepik.com/free-photo/tree-house-diamond-beach-nusa-penida-island-bali-indonesia_335224-348.jpg')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                        }}>
                         <div className="container">
                             <div className="sliderDetail">
                            <h2 className="sliderName">let's disover the world <br /> most amzing places.</h2>
                            <p className="desdc">Join with us today at a discount rate.</p>
                            <button className="regularBtn">Book Packages</button>
                        </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>         
            </div>
        </section>
    );
};

export default Slider;