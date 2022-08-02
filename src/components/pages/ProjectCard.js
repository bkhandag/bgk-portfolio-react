import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <Card style={{ width: "18em", margin: "2em" }}>
      <a href={props.deployed}>
        <Card.Img variant="top" src={props.img} />
      </a>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button href={props.github} variant="primary">
          View Code
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
