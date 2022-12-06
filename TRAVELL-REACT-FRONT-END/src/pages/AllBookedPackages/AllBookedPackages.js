import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import SinglePackage from './SinglePackage/SinglePackage';

const AllBookedPackages = () => {

    const history = useHistory();

    const [bookedPackage, setBookedPackage] = useState([]);
    const [packages, setPackages] = useState([]);

    // Use effect for loading my order data from the server
    useEffect( () => {
        fetch(`${process.env.BASE_URL}/myOrders`)
        .then(res => res.json())
        .then(data => setBookedPackage(data));
    }, []);
   
    // Use effect for loading package data from the server
    useEffect( () => {
        fetch('https://frightening-cemetery-53831.herokuapp.com/travelPackages')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, []);

    // Take an empty array for storing the booked packages 
    let orders = [];

    // Take an empty array for storing the booked id
    let userId = [];

    for(let pckgs of bookedPackage){
        userId.push(pckgs._id);
       let ids = pckgs.packageId;
       let pkg = packages.filter(pck => pck._id === ids);
       orders.push(pkg);
    }
    

    // Serial number count
    let serialNo = 0;
    
    // Handle back button if there is no bokked pckages
    const handleBackBtn = () => {
          history.push('/');
    }


    return (
        <section>
            <div className="bookedPackage">
                <div className="container">
                    <div className="pageTitle">
                        <h2 className="title">My Booked Packages</h2>
                    </div>
                    <div className="row justify-content-center">
                        {  orders.length ? orders.map(order => <SinglePackage key={serialNo++} serial={serialNo + 1} orderPck={order} userId={userId} />) : <>
                        <h2>No order available</h2> <br />
                        <button className="regularBtn" onClick={handleBackBtn} style={{width: "200px"}}>Go Back</button>
                        </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllBookedPackages;