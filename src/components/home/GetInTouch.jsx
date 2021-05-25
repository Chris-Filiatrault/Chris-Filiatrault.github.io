import React from "react";

// <a href="link/to/your/download/file" download="filename">Download link</a>
// require("../editable-stuff/2021-green-lower-res.jpg")

// /Users/chrisfiliatrault/Documents/Computing/website-github/src/assets/Resume.pdf

const GetInTouch = ({ heading, message, linkedIn}) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a href="https://www.linkedin.com/in/chris-filiatrault/">LinkedIn </a> or view my 
        <a href="https://1drv.ms/b/s!ArD4GThUJSRbmddvtoJ9QmLRG3Z5lw?e=MnhFG9"> resume</a> online.
        
      </p>
      
    </>
  );
};

export default GetInTouch;

