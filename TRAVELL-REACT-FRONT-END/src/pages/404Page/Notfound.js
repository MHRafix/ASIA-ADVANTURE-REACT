import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../404.png';

const Notfound = () => {
    return (
       <section>
           <div className="notFound">
               <div className="container">
                   <div className="details">
                       <img src={NotFound} alt="notFound" />
                       <Link to="/">
                       <button className="regularBtn">Back Home</button>
                       </Link>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Notfound;