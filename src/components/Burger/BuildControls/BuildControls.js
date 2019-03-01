import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls=[
{  label:"Bacon" , type: "bacon"},
{  label:"Salad" , type: "salad"},
{  label:"Meat" , type: "meat"},
{  label:"Cheese" , type: "cheese"}

]



const BuildControls=(props)=>{

return (
<div className={classes.BuildControls}>
<strong><p>Current Price : {props.price.toFixed(2)}</p></strong>
{controls.map(ctrl=> <BuildControl key={ctrl.label} label={ctrl.label}  less={()=> props.subtracting(ctrl.type)}  more={()=> props.adding(ctrl.type)  }  ></BuildControl>   ) }
<button disabled={!props.purchasable} onClick={props.ordering} className={classes.OrderButton}>Order Now</button>
</div>
)
}

export default BuildControls