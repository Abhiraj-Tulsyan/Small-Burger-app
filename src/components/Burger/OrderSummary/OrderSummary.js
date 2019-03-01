import React from 'react'
import Button from '../Button/Button'
const OrderSummary=( props )=>{
let ingredients=Object.keys(props.ingredients).map( (ingredient)=> { 

    return <li key={ingredient}> <span style={{textTransform:"capitalize"}}>{ingredient}</span> : {props.ingredients[ingredient]}  </li>
 })

return(
<div>
    <h3>Your order</h3>
<ul>
    {ingredients}
</ul>
<p>Do you want to checkout?</p>
<Button btnType="Danger" clicked={ props.cancel} >Cancel</Button>
<Button btnType="Success" clicked={ props.continue }>Continue</Button>
</div>

)




}

export default OrderSummary