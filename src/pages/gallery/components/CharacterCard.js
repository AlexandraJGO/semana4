import React from "react";
import Card from "react-bootstrap/Card";

const CharacterCard = ({ character }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={character.image} />
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
      <Card.Text>Status: {character.status}</Card.Text>
    </Card.Body>
  </Card>
);

export default CharacterCard;
