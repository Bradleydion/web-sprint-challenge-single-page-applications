import React, {useEffect} from "react";
import {Navbar, Button, Container, Row, Col} from "reactstrap";
import {Route,Link} from "react-router-dom"
import App from "./App"
import schema from "./Schema"

export default function Forms(props){
    
    const{submit, change, formes, setDisabled}=props
    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const vToUse = type === 'checkbox'? checked : value;
        change (name,vToUse)
    }

    useEffect(()=>{
        schema.isValid(formes).then((valid)=>{
          setDisabled(!valid);
        })
      },[onChange])
    console.log (props)
    return(
        <div><Container>
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
                <input onChange={onChange} value={formes.name} name='name' type='text' placeholder="Name for the order"/>
            </label>
            <select onChange={onChange} value={formes.size} name="size">Please select a size
            <option value=''>Select</option>
            <option value='1'>Small</option>
            <option value='2'>Medium</option>
            <option vaule='3'>Large</option>
            <option value='4'>Extra Large</option>
            </select>
           <label>Please Select Your Sauce</label>

           <input type="checkbox" name="orignial" onChange ={onChange} value={formes.original}/>

           <input type="checkbox" name="BBQSauce" onChange ={onChange} value={formes.BBQSauce}/>

           <input type="checkbox" name ="garlicRanch" onChange ={onChange} value={formes.garlicRanch}/>

           <input type="checkbox" name="spinachAlfredo"onChange ={onChange}  value={formes.spinachAlfredo}/>

           <label>Please Select Your Toppings</label>

           <label>Pepperoni<input type='checkbox' onChange={onChange} value={formes.peperoni} name='peperoni'/></label>

           <label>Sausage<input type='checkbox' onChange={onChange} value={formes.sausage} name='sausage'/></label>

           <label>Canadian Bacon<input type='checkbox' onChange={onChange} value={formes.canadianBaccon} name='canadianBaccon'/></label>

           <label>Spicy Italian Sausage<input type='checkbox' onChange={onChange} value={formes.spicyItalianSausage} name='spicyItalianSausage'/></label>

           <label>Grilled Chicken<input type='checkbox' onChange={onChange} value={formes.girlledChicken} name='girlledChicken'/></label>

           <label>Green Peppers<input type='checkbox' onChange={onChange} value={formes.greenPeppers} name='greenPeppers'/></label>

           <label>Diced Tomatoes<input type='checkbox' onChange={onChange} value={formes.dicedTomatos} name='dicedTomatos'/></label>

           <label>Black Olives<input type='checkbox' onChange={onChange} value={formes.blackOlives} name='blackOlives'/></label>

           <label>Roasted Garlic<input type='checkbox' onChange={onChange} value={formes.roastedGarlic} name='roastedGarlic'/></label>

           <label>Artichoke Hearts<input type='checkbox' onChange={onChange} value={formes.artichokeHearts} name='artichokeHearts'/></label>

           <label>Three Cheese<input type='checkbox' onChange={onChange} value={formes.threeCheese} name='threeCheese'/></label>

           <label>Pineapple<input type='checkbox' onChange={onChange} value={formes.pineapple} name='pineapple'/></label>

           <label>Extra Cheese<input type='checkbox' onChange={onChange} value={formes.extraCheese} name='extraCheese'/></label>

            <label>Any Special Instructions</label>

            <input onChange={onChange} value={formes.instructionField} name="instructionField" type='text' placeholder="Special Instructions"/>
            
        </form> 
        </Container></div>
        // <Route path="/"><App/></Route>
        // </Container>
    )
}