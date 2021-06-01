import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
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

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
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


function App() {
  return (
    <div className="container-flex">
      <Router>
        <Switch>
          <Route exact path="/" component= {Home}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
