import React from 'react'
import BurgerControl from '../BurgerControls/BurgerControl/BurgerControl'
import classes from "./BurgerControls.css"
const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'bacon', type: 'bacon' },
    { label: 'salad', type: 'salad' }
]
const BurgerControls = (props) => {
    return (
        <div className={classes.BurgerControls}>
            <p>Current Price: <strong>{props.updatedPrice.toFixed(2)}</strong> </p>
            {controls.map(ctrls => {
                return <BurgerControl
                    key={ctrls.label}
                    label={ctrls.label}
                    added={() => props.ingredientAdded(ctrls.type)}
                    removed={() => props.ingredientRemoved(ctrls.type)}
                     />
            })}
            <button onClick={props.odered} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW {props.updatedPrice.toFixed(2)}</button>
        </div>
    )
}

export default BurgerControls;
