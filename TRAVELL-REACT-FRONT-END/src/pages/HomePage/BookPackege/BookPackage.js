import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../CustomHooks/useAuth';

const BookPackage = () => {
    
    const history = useHistory();
    const { user } = useAuth();
    const {uniqueId} = useParams();
    const { register, handleSubmit, reset } = useForm();
 
    const [packages, setPackages] = useState([]);

    // Use effect for loading data from the server
    useEffect( () => {
        fetch(`${process.env.BASE_URL}/travelPackages`)
        .then(res => res.json())
        .then(data => setPackages(data));
    }, []);
    

    // Get the unique package using unique id
    if(packages.length){
       const singlePackage = packages.find(uniquePackage => uniquePackage._id === uniqueId);
       if(singlePackage){
            setPackages(singlePackage);
            
       }else{
            history.push('/');
       }

    }
    
    // Booking package data insert to the database
    const onSubmit = data => {
          axios.post(`${process.env.BASE_URL}/BookedPackages`, data)
          .then(res => {
            if(res.data.insertedId){
                alert('Package successfully booked!');
                reset();
             }
          })

    };
   

    return (
        <section>
            <div className="bookingPackageDetail">
                 <div className="container">
                     <div className="singlePackageDetail">
                     <div className="row">
                         <div className="col-lg-5 col-md-6 col-sm-12">
                             <div className="packageThumbnail">
                                 <img src={packages.thumbnail} alt="packageThumbnail" />
                             </div>
                           </div>

                             <div className="col-lg-7 col-md-6 col-sm-12">
                                 <div className="packageDetails">
                                     <h1 className="packageTitle">{packages.packageName}</h1>
                                     <div className="dualInfo">
                                         <span className="dualInfo">Duration : {packages.day} days</span>
                                         <span className="dualInfo">Cost : $ {packages.cost}</span>
                                     </div>
                                     <div className="dualInfo">
                                         <span className="dualInfo">Difficulty : {packages.defficult}</span>
                                         <span className="dualInfo">Age : {packages.ageVariant}</span>
                                     </div>
                                     <div className="dualInfo">
                                         <span className="dualInfo">Type : {packages.typology}</span>
                                         <span className="dualInfo">Location : {packages.location}</span>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>
                 </div>
            </div>

            <div className="bookingForm">
                 <div className="someAddition">
                     <h2 className="title">Book This Package</h2>
                     <p className="desc">Please book your package quickly. Limited offer, book quickly. Confirm first.</p>
                 </div>
                <div className="container">
                    <div className="infoForm">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input id="inputField" type="hidden" {...register("packageId")} value={uniqueId} />
                        
                            <input id="inputField" {...register("name", { required: true, maxLength: 40 })} placeholder="Enter your name" value={user.displayName} />
                            <input id="inputField" {...register("email", { required: true })} placeholder="Enter your email" value={user.email} /> <br />
                            <input id="inputField" type="number" {...register("age", { min: 3, max: 60 })} min="3" max="60" placeholder="Enter your age" />
                            <input id="inputField" type="tel" {...register("phoneNumber", {required: true})} placeholder="Enter your phone number" /> <br />
                            <textarea id="inputField" type="text" {...register("address", {required: true})} placeholder="Enter your address" />
                            <textarea id="inputField" type="text" {...register("message", {required: true})} placeholder="Enter your message" /> <br />

                            <input className="regularBtn" type="submit" value="Confirm Booking" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookPackage;