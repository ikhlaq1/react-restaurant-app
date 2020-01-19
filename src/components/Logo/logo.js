import React from 'react'
import Classes from './Logo.css'
import burgerLogo from '../../assets/images/burger-logo.png'
const Logo = (props) => {
  return (
    <div className={Classes.Logo}>
        <img src={burgerLogo} alt="Myburger"/>
    </div>
  );
}
 
export default (Logo)