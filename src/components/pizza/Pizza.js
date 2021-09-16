import React, { Component } from "react";
import "./Pizza.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Tomato from "../tomato/Tomato";
import Mushroom from "../mushroom/Mushroom";
import Corn from "../corn/Corn";
import Veggie from "../veggie/Veggie";
import NavBar from "../NavBar/NavBar";
import Particles from "react-particles-js";
import CustomChatbot from "../chatbot/CustomChatbot";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tomato: false,
      mushroom: false,
      veggie: false,
      corn: false
    };
  }

  clickEventHandler = ingredient => {
    if (ingredient === "tomato") {
      this.setState({
        tomato: !this.state.tomato
      });
    } else if (ingredient === "mushroom") {
      this.setState({
        mushroom: !this.state.mushroom
      });
    } else if (ingredient === "corn") {
      this.setState({
        corn: !this.state.corn
      });
    } else {
      this.setState({
        veggie: !this.state.veggie
      });
    }
  };

  render() {

    const tomato = this.state.tomato && <Tomato />;
    const mushroom = this.state.mushroom && <Mushroom />;
    const corn = this.state.corn && <Corn />;
    const veggie = this.state.veggie && <Veggie />;

    return (
      <div>
      <Particles
        params={{
          particles:{
            number:{
              value :30 ,
              density :{
                enable: true , 
                value_area :900
              }
            }
          },
          shape:{
            type:"star",
            stroke:{
              width:6,
              color:"#fab00"
            }
          }
        }}
       />
      <NavBar />
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
            </div>
          </div>
          <CustomChatbot eventHandler={this.clickEventHandler} />
        </div>
        <Particles
        params={{
          particles:{
            number:{
              value :30 ,
              density :{
                enable: true , 
                value_area :900
              }
            }
          },
          shape:{
            type:"star",
            stroke:{
              width:6,
              color:"#fab00"
            }
          }
        }}
       />
        <div className="container" id="About">
        <About/>
        </div>
        <Particles
        params={{
          particles:{
            number:{
              value :30 ,
              density :{
                enable: true , 
                value_area :900
              }
            }
          },
          shape:{
            type:"star",
            stroke:{
              width:6,
              color:"#fab00"
            }
          }
        }}
       />
        <div className="container" id="portfolio">
        <Portfolio/>
        </div>
        <Particles
        params={{
          particles:{
            number:{
              value :30 ,
              density :{
                enable: true , 
                value_area :900
              }
            }
          },
          shape:{
            type:"star",
            stroke:{
              width:6,
              color:"#fab00"
            }
          }
        }}
       />
        <div className="container" id="contact">
            <Contact/>
        </div>
      </div>
    );
  }
}

export default Pizza;