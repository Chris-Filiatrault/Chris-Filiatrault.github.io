import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = React.forwardRef(
  ({ backgroundColor, title, message }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{ backgroundColor: backgroundColor }}
        className="title bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">{title}</h1>
          <Typist className="lead typist" cursor={{ show: false }}>
            <Typist.Delay ms="1800" />
            {message}
          </Typist>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
