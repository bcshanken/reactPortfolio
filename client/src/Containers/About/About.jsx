import React from "react";
import Cardtext from "../../Components/About/Cardtext";
import Headshot from "../../Components/About/Headshot";
import Title from "../../Components/About/Title";
import "./style.css";


const About = () => {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-md-7 card">
          <Title />
          <hr />
          <div className="cardbody col-xs-12">
            <Headshot />
            <Cardtext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
