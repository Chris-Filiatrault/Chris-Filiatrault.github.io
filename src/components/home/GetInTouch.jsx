import React from "react";


const GetInTouch = ({ heading, message, linkedIn}) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a href="https://www.linkedin.com/in/chris-filiatrault/">LinkedIn</a>. 
      </p>
      
    </>
  );
};

export default GetInTouch;
