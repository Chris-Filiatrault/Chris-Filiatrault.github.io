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
        <a href="https://onedrive.live.com/view.aspx?resid=5B2425543819F8B0!420878&ithint=file%2cdocx&authkey=!AHZHBC_ROKk45Ug"> resume</a> online.
        
      </p>
      
    </>
  );
};

export default GetInTouch;

