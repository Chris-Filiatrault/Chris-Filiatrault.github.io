import React from "react";

const AboutMe = ({ heading, message1, message2, message3}) => {

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-lg">
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message1}</p>
            <p className="lead text-center">{message2}</p>
            <p className="lead text-center">{message3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
