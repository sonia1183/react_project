import React from "react";
import Pizza2 from "../image/pizza3.jpg";


const Contact = () => {
    return (
        <div className="container-lg ">
            <h1>Contact Us</h1>
            <div className="row">
            <div className="col">
                 <img src={Pizza2} className="contact1"/>
            </div>
               <div className="col">
               <div className="C1">
                   <h2>Sin City Slice</h2>
                   <h2>47 Market Street<br/>South Melbourne 3205<br/>Australia<br/>+61 3 96963777</h2>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default Contact

