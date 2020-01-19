import React from 'react'
import classes from './burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {
    let transformedINgredients = Object.keys(props.ingredients).map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) =>{
            return <BurgerIngredients key={igKey + i} type={igKey} />
        })
    }).reduce((err,el)=>{
        return err.concat(el);
    })
    if(transformedINgredients.length === 0){
        transformedINgredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedINgredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}
export default burger;
