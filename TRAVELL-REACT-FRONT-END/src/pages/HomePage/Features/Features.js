import React from 'react';

const Features = () => {
    return (
       <section>
           <div className="featuresSection">
               <div className="container">
               <div className="row">
                   <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="featureBox">
                           <div className="icon">
                           <i className="fas fa-trophy"></i>
                            </div>
                           <div className="countNumber"><h2 className="number">1233</h2></div>
                           <div className="featureName"><h3 className="name">Success Tour</h3></div>
                       </div>
                   </div>
                 
                   <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="featureBox">
                           <div className="icon">
                           <i className="fas fa-paper-plane"></i>
                               </div>
                           <div className="countNumber"><h2 className="number">341</h2></div>
                           <div className="featureName"><h3 className="name">Tour Packages</h3></div>
                       </div>
                   </div>
                   
                   <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="featureBox">
                           <div className="icon">
                           <i className="fas fa-heart"></i>
                               </div>
                           <div className="countNumber"><h2 className="number">1211</h2></div>
                           <div className="featureName"><h3 className="name">Happy Client</h3></div>
                       </div>
                   </div>

                   <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="featureBox">
                           <div className="icon">
                           <i className="fas fa-code-branch"></i>
                           </div>
                           <div className="countNumber"><h2 className="number">450</h2></div>
                           <div className="featureName"><h3 className="name">Our Branches</h3></div>
                       </div>
                   </div>
                 </div>
               </div>
           </div>
       </section>
    );
};

export default Features;