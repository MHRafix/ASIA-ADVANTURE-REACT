import React, { useEffect, useState } from 'react';
import SinglePackage from './SinglePackage/SinglePackage';

const Packages = () => {
    // use useState for storing the packages in the state
    const [packages, setPackages] = useState([]);

    // Use useEffect for load data from the server
    useEffect(() => {
        fetch(`${process.env.BASE_URL}/travelPackages`)
        .then(res => res.json())
        .then(data => setPackages(data));
    }, []);

    return (
        <section>
        <div className="packagesSection" id="packages">
            <div className="packages">
                <div className="container">
                    <div className="sectionTitle">
                        <h2 className="sectionName">Our <span className="highlightPart">Packages</span></h2>
                    </div>
                    <div className="row">
                        {
                            packages.map(travelPackage => <SinglePackage key={travelPackage._id} package={travelPackage} /> )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Packages;