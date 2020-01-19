import React from 'react'
import classes from './BurgerControl.css'
import Aux from '../../../../hoc/Aux'
const BuildControl = (props) => {
  return (
    <Aux>
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.Less} onClick={props.removed}>Less</div>
        <div className={classes.More} onClick={props.added}>More</div>
      </div>
    </Aux>

  )
}
export default BuildControl;
