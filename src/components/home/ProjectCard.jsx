import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = (props) => {
  
  return (
    <Col md={6}>
      <Card.Link href={props.link} target="_blank">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h4">{props.name} </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <hr/>
          <Card.Text><strong>Languages: </strong>{props.languages}</Card.Text>
        </Card.Body>
      </Card>
      </Card.Link>
    </Col>
  );
};

export default ProjectCard;
