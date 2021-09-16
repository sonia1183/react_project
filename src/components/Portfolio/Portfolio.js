import React from "react";
import Award1 from "../image/award1.jpg";
import Award from "../image/award.jpeg";
const portfolio = () => {
    return (
        <div className="container-lg">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col">
                    <img src={Award1} className="award"/>
                </div>
                <div className="col">
                    <img src={Award} className="award"/>
                </div>
            </div>
            <div className="row">
                <ul>
                    <li><b>S.Pellegrino Award</b> for<i> best pizzeria in Asia</i>  </li>
                    <li><b>Acqua Panna</b></li>
                </ul>
            </div>
        </div>
    )
}

export default portfolio;
