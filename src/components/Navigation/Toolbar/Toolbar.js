import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar=()=>{

return(

<header className={classes.Toolbar}>
<div>Menu</div>
<Logo></Logo>
<nav>
   <NavigationItems></NavigationItems>
</nav>
</header>

)

}
export default Toolbar