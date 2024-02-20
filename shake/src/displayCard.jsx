
import React from "react";
import { Card } from "react-bootstrap"; 
const DisplayCard = (props) => {
  return (
    <Card className='card'>
      <Card.Title><h2>{props.name}</h2></Card.Title>
      <Card.Text>{props.email}</Card.Text>
      <Card.Text>{props.phone}</Card.Text>
      <Card.Text>{props.age}</Card.Text>
      <Card.Text>{props.address}</Card.Text>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default DisplayCard;
