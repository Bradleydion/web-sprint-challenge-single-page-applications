import React from "react";
import {Navbar, Button, Container, Row, Col, Card, CardImg,CardImgOverlay, CardText,CardBody, CardLink, CardTitle} from "reactstrap";
import PizzPhoto from "./PizzaPhoto/chad-montano-MqT0asuoIcU-unsplash.jpg"
import {useRouteMatch} from "react-router-dom"


const App = () => {

  return (
    <Container>
      <Navbar>
          <Row>
            <Col sm={{size: 'auto'}}><h1>Lambda Eats</h1> 
            </Col>
            <Col sm={{size: 'auto'}}><Button color="primary">Home</Button></Col>
            <Col sm={{size: 'auto'}}><Button color="secondary">About</Button></Col>
          </Row>
      </Navbar>
      <Card inverse>
        <CardImg width="100%" src={PizzPhoto}alt= "Card image cap"/>
        <CardImgOverlay>
         <Col>
            <Row><CardTitle tag="h3">Your favorite food, deliverd while coding</CardTitle></Row>
          <Row><Button color="primary">Pizza?</Button></Row>
          </Col>
        </CardImgOverlay>
      </Card>

    </Container>
  );
};
export default App;
