import React from 'react';
import { useHistory } from 'react-router-dom';

const SinglePackage = (props) => {

       const history = useHistory();
      // Destructuring the package data
      const { _id, packageName, thumbnail, location, description, cost, type } = props.package;

      const handleBookPackageBtn = id => {
            history.push(`/packages/bookPackage/${id}`);
            console.log(history);
      }
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="packageBox">
                                <div className="imgAndType">
                                  <img src={thumbnail} alt="parisImage" />
                                  <span className="packageType">{type}</span>
                                </div>
                                
                                <div className="nameAndDestination">
                                  <h3 className="name">{packageName}</h3>
                                  <div className="destinationWrapper">
                                   <span className="destination">
                                      <i className="fas fa-map-marker-alt"></i>{location}</span>
                                      <span className="price">${cost}</span>
                                  </div>
                                  
                                </div>
                                <hr />
                                {/* <div className="catAndPrice">
                                   <span className="category">Relax</span>
                                   
                                </div> 
                                <hr />*/}
                                <div className="shotrDesc">
                                    <p className="desc">{description.slice(0, 170,)}.....</p>
                                </div>
                                <button onClick={ () => handleBookPackageBtn(_id)} className="regularBtn">Book Now</button>
                            </div>
                        </div>
        </>
    );
};

export default SinglePackage;