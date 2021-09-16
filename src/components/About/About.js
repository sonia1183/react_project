import React from "react";
import Pizza1 from "../image/pizza1.jpg"
const About = () => {
    return (
        <div className="container-lg">
           <h1>ABOUT</h1>
           <div className="row">
           <div className="col">
             <img src={Pizza1} className="pizza1"/>
                 <h2>Cooking</h2>
                 <h3>
                 In restaurants, pizza can be baked in an oven with stone bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in the case of more expensive restaurants, a wood or coal-fired brick oven. On deck ovens, pizza can be slid into the oven on a long paddle,
                  called a peel, and baked directly on the hot bricks or baked on a screen.
                 </h3>
               
             </div>
             
             <div className="col">
             <h2>History</h2><br/>
              <h3>Pizza is a savory dish
                    of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese,
                     and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, 
                     traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.<br/>
                     In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced, and is eaten with the use of a knife and fork.
                      In casual settings, however, it is cut into wedges to be eaten while held in the hand.</h3><br/>
              <h2>Preparation</h2><br/>
              <h3> Pizza is sold fresh or frozen, and whole or as portion-size slices or pieces. 
              Methods have been developed to overcome challenges such as preventing the sauce from combining with the dough and producing a crust that can be frozen and reheated without becoming rigid.
               There are frozen pizzas with raw ingredients and self-rising crusts.</h3>
            </div>
            </div> 
        </div>
    )
}

export default About;
