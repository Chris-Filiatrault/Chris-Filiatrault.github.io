import React from "react";


const GetInTouch = ({ heading, message, linkedIn}) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a href="https://www.linkedin.com/in/chris-filiatrault/" target="_blank">LinkedIn, </a> 
        or view my public
        <a href="https://1drv.ms/w/s!ArD4GThUJSRbmdgYRxG30i9me4D04w?e=8cPgLj" target="_blank"> resume </a>online.
      </p>
      
    </>
  );
};

export default GetInTouch;
