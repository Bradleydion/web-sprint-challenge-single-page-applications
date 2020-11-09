import React, {useState, useEffect} from "react";
import Forms from "./Form"
import * as yup from "yup"
import schema from "./Schema"
import axios from "axios"
import {Navbar, Button, Container, Row, Col, Card, CardImg,CardImgOverlay,CardTitle} from "reactstrap";
import PizzPhoto from "./PizzaPhoto/chad-montano-MqT0asuoIcU-unsplash.jpg"
import {Route,Link} from "react-router-dom"

const initialFormValues= {
  // tetx input for name
  name:'',
  // dropdown window for Choice of Size
  size:'',
  // radio buttons for Choice of Sauce
  Original:'',
  GarlicRanch:'',
  BBQSauce:'',
  SpinachAlfredo:'',
  // checkbox for Add Toppings sub heading Choose Up To 10
  Pepperoni:'',
  Sausage:'',
  CanadianBaccon:'',
  SpicyItalianSausage:'',
  GirlledChicken:'',
  GreenPeppers:'',
  DicedTomatos:'',
  BlackOlives:'',
  RoastedGarlic:'',
  ArtichokeHearts:'',
  ThreeCheese:'',
  Pineapple:'',
  ExtraCheese:'',
  // textfield input for Special Instructions place holder of "Anything else you'dlike to add?"
  instructionField:''
  // submit button
}
const initalsFormErrors ={
  name:'',
  size:'',
  instructionField:''
}
const initialOrdersArr = [];
const intialDisabled = false;
const App = () => {
  const[orders, setOrders] = useState (initialOrdersArr);
  const [formes, setForm] = useState(initialFormValues);
  const [formErrors, setFormErrors]= useState(initalsFormErrors)
  const [disabled, setDisabled]= useState(intialDisabled)
  const postNewOrder = (newOrder) => {
    axios
    .post("https://reques.in/api/users", newOrder)
    .then((res)=> {
      console.log (res)
      setOrders ([...orders,res.data]);
      setForm(initialFormValues);
    })
    .catch((err)=>{
      console.log (err);
    })
  }
  const change = (name, value) =>{
    yup
    .reach(schema,name)
    .validate(value)
    .then (()=> {
      setFormErrors({
        ...formErrors,
        [name]:"",
      })
    })
    .catch((err)=>{
      setFormErrors({
        ...formErrors,
        [name]:err.errors,
      })
    })
    setForm({
      ...formes,
      [name]:value,
    })
  }
  const submit = () => {
    const newOrder = {
      name: formes.name.trim(),
      size: formes.size.trim(),
      original : formes.original,
      BBQSauce: formes.BBQSauce,
      garlicRanch:formes.garlicRanch,
      spinachAlfredo:formes.spinachAlfredo,
      pepperoni:formes.pepperoni,
      sausage:formes.sausage,
      canadianBaccon:formes.canadianBaccon,
      spicyItalianSausage:formes.spicyItalianSausage,
      girlledChicken:formes.girlledChicken,
      greenPeppers:formes.greenPeppers,
      dicedTomatos:formes.dicedTomatos,
      blackOlives:formes.blackOlives,
      roastedGarlic:formes.roastedGarlic,
      artichokeHearts:formes.artichokeHearts,
      threeCheese:formes.threeCheese,
      pineapple:formes.pineapple,
      extraCheese:formes.extraCheese,
      instructionField: formes.instructionField.trim()
    }
    postNewOrder(newOrder)
  }
 
  return (
  <div>
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
          <Row><Link to='/pizza'><Button color="primary">Pizza?</Button></Link></Row>
          </Col>
        </CardImgOverlay>
      </Card>
    </Container>
    <Route path="/pizza" render={(props)=>(<Forms{...props} submit={submit} change={change} formes={formes} setDisabled={setDisabled}/>)}/>
    {/* <Route path="/pizza"><Forms/></Route> */}
    </div>
  );
};
export default App;
