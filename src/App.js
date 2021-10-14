import React from "react";
import {
  mainBody,
  about,
  skills,
  getInTouch,
  projects
} from "./editable-stuff/config.js";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch.jsx";

const App = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        backgroundColor={mainBody.backgroundColor}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message1={about.message1}
          message2={about.message2}
          message3={about.message3}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {projects.show && (
        <Project/>
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
       <Footer
         icons={mainBody.icons}
       >
         {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </>
  );
});


export default App;
