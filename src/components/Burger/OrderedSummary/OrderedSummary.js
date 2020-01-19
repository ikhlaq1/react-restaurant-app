import React from 'react'
import Aux from "../../../hoc/Aux"
import classes from './OrderedSummary.css'
const OrderedSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map((igKey)=>{
        return <li key={igKey}>  <span style={{textTransform:"capitalize"}}>{igKey}</span> :{props.ingredients[igKey]} </li>
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p >A delicious burger with the following ingredients</p>
            <ul>
                {ingredients}
            </ul>
            <h3>Total price is : {props.totalPrice}</h3>
            <button className ={[classes.Button , classes.Success].join(' ')} onClick={props.continue}> CONTINUE </button>
            <button className ={[classes.Button , classes.Danger].join(' ')} onClick={props.cancel}> CANCEL </button>
        </Aux>

    )
}

export default OrderedSummary
