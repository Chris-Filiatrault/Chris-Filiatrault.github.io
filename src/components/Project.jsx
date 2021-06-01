import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import {projects} from "../editable-stuff/config.js";

const Project = () => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{projects.heading}</h2>
          <Row>
          {projects.data.map((project, index) => (
                <ProjectCard
                name={project.name}
                description={project.description}
                languages={project.languages}
                link={project.link}
                />
              ))}
          </Row>
        
      </Container>
    </Jumbotron>
  );
};

export default Project;
