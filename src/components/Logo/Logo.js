import React from 'react'
import imagesrc from '../../assests/images/burgerlogo.png'
import classes from './Logo.css'
const Logo =(props)=>{
return(
<div className={classes.Logo}>
    <img src={imagesrc} alt='My Burger'/>
</div>

)

}

export default Logo