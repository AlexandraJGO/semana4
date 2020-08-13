import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";

import image from "../../../images/profile.png";

const Introduccion = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Image alt="profile" src={image} roundedCircle />
        <h1>Jimena Garcia</h1>
      </Container>
    </Jumbotron>
  );
};

export default Introduccion;
