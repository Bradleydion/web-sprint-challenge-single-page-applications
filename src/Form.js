import React, {useEffect} from "react";
import {Navbar, Button, Container, Row, Col} from "reactstrap";
import {Route,Link} from "react-router-dom"
import App from "./App"
import schema from "./Schema"

export default function Forms(props){
    
    const{submit, change, formes, setDisabled, formErrors,setForm,initialFormValues}=props
    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
        setForm(initialFormValues)
    }
    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const vToUse = type === 'checkbox'? checked : value;
        evt.persist();
        change (name,vToUse)
    }

    useEffect(()=>{
        schema.isValid(formes).then((valid)=>{
          setDisabled(!valid);
        })
      },[formes])
    console.log (props)
    return(
        <div><Container>
        
        
        <form onSubmit ={onSubmit}>
           <div><label> Name: <input onChange={onChange} value={formes.name} name='name' type='text' placeholder="Name for the order"/>
            </label></div> 
            {formErrors.name?<p>{formErrors.name}</p>:null}
            <label>Please Select A Size: <select onChange={onChange} value={formes.size} name="size"> 
            <option value=''>Select</option>
            <option value='1'>Small</option>
            <option value='2'>Medium</option>
            <option value='3'>Large</option>
            <option value='4'>Extra Large</option>
            </select>
            {formErrors.size?<p>{formErrors.size}</p>:null}
            </label>
          <ul> <label>Please Select Your Sauce</label>

          <li> <input type="checkbox" name="original" onChange ={onChange} value={formes.original}/> Original</li>

           <li><input type="checkbox" name="BBQSauce" onChange ={onChange} value={formes.BBQSauce}/> BBQ Sauce</li>

           <li><input type="checkbox" name ="garlicRanch" onChange ={onChange} value={formes.garlicRanch}/> Garlic Ranch</li>

           <li><input type="checkbox" name="spinachAlfredo"onChange ={onChange}  value={formes.spinachAlfredo}/> Spinach Alfredo </li>
</ul>

           <ul><label>Please Select Your Toppings</label>
           <li><label> Pepperoni <input type='checkbox' onChange={onChange} value={formes.pepperoni} name='pepperoni'/></label></li>
           <li><label> Sausage <input type='checkbox' onChange={onChange} value={formes.sausage} name='sausage'/></label></li>
           <li><label> Canadian Bacon <input type='checkbox' onChange={onChange} value={formes.canadianBaccon} name='canadianBaccon'/></label></li>
           <li><label> Spicy Italian Sausage <input type='checkbox' onChange={onChange} value={formes.spicyItalianSausage} name='spicyItalianSausage'/></label></li>
           <li><label> Grilled Chicken <input type='checkbox' onChange={onChange} value={formes.girlledChicken} name='girlledChicken'/></label></li>
           <li><label> Green Peppers <input type='checkbox' onChange={onChange} value={formes.greenPeppers} name='greenPeppers'/></label></li>
           <li><label> Diced Tomatoes <input type='checkbox' onChange={onChange} value={formes.dicedTomatos} name='dicedTomatos'/></label></li>
           <li><label> Black Olives <input type='checkbox' onChange={onChange} value={formes.blackOlives} name='blackOlives'/></label></li>
           <li><label> Roasted Garlic <input type='checkbox' onChange={onChange} value={formes.roastedGarlic} name='roastedGarlic'/></label></li>
           <li><label> Artichoke Hearts <input type='checkbox' onChange={onChange} value={formes.artichokeHearts} name='artichokeHearts'/></label></li>
           <li><label> Three Cheese <input type='checkbox' onChange={onChange} value={formes.threeCheese} name='threeCheese'/></label></li>
           <li><label> Pineapple <input type='checkbox' onChange={onChange} value={formes.pineapple} name='pineapple'/></label></li>
           <li><label> Extra Cheese <input type='checkbox' onChange={onChange} value={formes.extraCheese} name='extraCheese'/></label></li>

</ul>
            <label>Any Special Instructions: <textarea onChange={onChange} value={formes.instructionField} name="instructionField" placeholder="Special Instructions:"/>
            </label> <Button id="submit" type="submit" color="primary">Submit</Button>
        </form> 
        
        </Container></div>
        // <Route path="/"><App/></Route>
        
    )
}