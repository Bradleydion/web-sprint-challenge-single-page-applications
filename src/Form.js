import React from "react";
import {Navbar, Button, Container, Row, Col} from "reactstrap";
import {Route,Link} from "react-router-dom"
import App from "./App"

export default function Forms(props){
    const{submit, change, form, disabled}=props
    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const vToUse = type === 'checkbox'? checked : value;
        change (name,vToUse)
    }
    console.log (form)
    return(
        <Container>
        <Navbar>
            <Row>
              <Col sm={{size: 'auto'}}><h1>Lambda Eats</h1> 
              </Col>
              <Col sm={{size: 'auto'}}><Link to='/'><Button color="primary">Home</Button></Link></Col>
              <Col sm={{size: 'auto'}}><Button color="secondary">About</Button></Col>
            </Row>
        </Navbar>
        <form onSubmit ={onSubmit}>
            <label> Name: 
                <input onChange={onChange} value={form.name} name='name' type='text' placeholder="Name for the order"/>
            </label>
            <select onChange={onChange} value={form.size} name="size">Please select a size
            <option value=''>Select</option>
            <option value='1'>Small</option>
            <option value='2'>Medium</option>
            <option vaule='3'>Large</option>
            <option value='4'>Extra Large</option>
            </select>
           <label>Please Select Your Sauce</label>

           <input type="radio" name="orignial" value="original">Original</input>

           <input type="radio" name="BBQSauce" value="BBQSauce">BBQ Sauce</input>

           <input type="radio" name ="garlicRanch" value="garlicRanch">Garlic Ranch</input>

           <input type="radio" name="spinachAlfredo" value="spinachAlfredo">Spinach Alfredo</input>

           <label>Please Select Your Toppings</label>

           <label>Pepperoni<input type='checkbox' onChange={onChange} value={form.peperoni} name='peperoni'/></label>

           <label>Sausage<input type='checkbox' onChange={onChange} value={form.sausage} name='sausage'/></label>

           <label>Canadian Bacon<input type='checkbox' onChange={onChange} value={form.canadianBaccon} name='canadianBaccon'/></label>

           <label>Spicy Italian Sausage<input type='checkbox' onChange={onChange} value={form.spicyItalianSausage} name='spicyItalianSausage'/></label>

           <label>Grilled Chicken<input type='checkbox' onChange={onChange} value={form.girlledChicken} name='girlledChicken'/></label>

           <label>Green Peppers<input type='checkbox' onChange={onChange} value={form.greenPeppers} name='greenPeppers'/></label>

           <label>Diced Tomatoes<input type='checkbox' onChange={onChange} value={form.dicedTomatos} name='dicedTomatos'/></label>

           <label>Black Olives<input type='checkbox' onChange={onChange} value={form.blackOlives} name='blackOlives'/></label>

           <label>Roasted Garlic<input type='checkbox' onChange={onChange} value={form.roastedGarlic} name='roastedGarlic'/></label>

           <label>Artichoke Hearts<input type='checkbox' onChange={onChange} value={form.artichokeHearts} name='artichokeHearts'/></label>

           <label>Three Cheese<input type='checkbox' onChange={onChange} value={form.threeCheese} name='threeCheese'/></label>

           <label>Pineapple<input type='checkbox' onChange={onChange} value={form.pineapple} name='pineapple'/></label>

           <label>Extra Cheese<input type='checkbox' onChange={onChange} value={form.extraCheese} name='extraCheese'/></label>

            <label>Any Special Instructions</label>

            <input onChange={onChange} value={form.instructionField} name="instructionField" type='text' placeholder="Special Instructions"/>
            
        </form>
        <Route path="/"><App/></Route>
        </Container>
    )
}