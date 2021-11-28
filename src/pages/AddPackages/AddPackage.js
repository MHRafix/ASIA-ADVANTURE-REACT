import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {

      // React hook form functionalities
      const { register, handleSubmit, reset } = useForm();

      const onSubmit = data => {
        axios.post('https://frightening-cemetery-53831.herokuapp.com/travelPackages', data)
        .then(res => {
          if(res.data.insertedId){
              alert('Package Posted Successfully!');
              reset();
           }
        })

  };
    return (
        <section>
            <div className="addPackages">
                <div className="container">
                    <div className="pageTitle">
                        <h2 className="title text-center">Post a New Package </h2>
                    </div>
                    <div className="addPackagesForm">
                    {/* React hook form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
<input type="text" id="inputField" {...register("packageName", { required: true})} placeholder="Enter package title" />
<input type="text" id="inputField" {...register("thumbnail", { required: true })} placeholder="Enter package thumbnail url" /> <br />
<input id="inputField" type="number" {...register("cost", { required: true })} placeholder="Enter package cost / price" />
<input id="inputField" type="text" {...register("type", {required: true})} placeholder="Enter package type / stage" /> <br />
<input id="inputField" type="number" {...register("day", {required: true})} min="1" max="30" placeholder="Enter tour duration / days" />
<input id="inputField" type="text" {...register("location", {required: true})} placeholder="Enter tour location (Tamil, India)" /> <br />
<input id="inputField" type="text" {...register("typology", {required: true})} placeholder="Enter tour typology (Relax, Feel, Beatiness)" /> 
<input id="inputField" type="text" {...register("defficult", {required: true})} placeholder="Enter tour defficulties (Hard, Manageable, Low)" /> <br />
<input id="inputField" type="number" {...register("ageVariant", {required: true})} min="3" max="60" placeholder="Enter traveler min and max age" /> 
<textarea id="inputField" type="text" {...register("description", {required: true})} placeholder="Enter package description" /> <br />
<input id="inputField" type="hidden" {...register("status", {required: true})} value="Pendding" placeholder="Enter traveler min and max age" /><br />

                            <input className="regularBtn" type="submit" value="Post Package" />
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddPackage;