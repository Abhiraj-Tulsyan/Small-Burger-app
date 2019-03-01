import React from 'react'
import Aux from '../../hoc/Auxy'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Burger/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const ING_PRICES={
salad:0.6,
bacon:0.8,
meat:1.1,
cheese:0.3

}

export default class BurgerBuilder extends React.Component{
state={
    ingredients: {
        salad:0,
        cheese:0,
        bacon:0,
        meat:0

    },
    purchasable:false,
    totalPrice:4,
    purchasing:false
}
addIngredientsHandler=(type)=>{

let currentCount=this.state.ingredients[type];
let newCount=currentCount+1;
let newIngredients={ ...this.state.ingredients}
newIngredients[type]=newCount;


let currentPrice=this.state.totalPrice;
let newPrice=currentPrice+ING_PRICES[type];


this.setState({ingredients:newIngredients, totalPrice:newPrice})
this.updatePurchasable(newIngredients)


}
subtractIngredientHandler=(type)=>
{
    let currentCount=this.state.ingredients[type];
let newCount=currentCount-1;
newCount=Math.max(0,newCount);
let newIngredients={ ...this.state.ingredients}
newIngredients[type]=newCount;
let currentPrice=this.state.totalPrice;
let newPrice=currentPrice-ING_PRICES[type];

if(currentCount>0)
this.setState({ingredients:newIngredients, totalPrice:newPrice})
else
this.setState({ingredients:newIngredients, totalPrice:currentPrice})

this.updatePurchasable(newIngredients)

}
updatePurchasable(ingredients)
{
let sum=Object.keys(ingredients).map( (key)=> { return ingredients[key]}).reduce( (sum, ele)=> { return sum+ele} , 0) 
this.setState({purchasable:sum>0})

}

purchaseHandler=()=>
{
    this.setState({purchasing:true})
}

purchaseCancelledHandle=()=>{
this.setState({purchasing:false})

}

purchaseContinuedHandler=()=>{
    alert("You have bought the burger : " + this.state.totalPrice.toFixed(2))
}



render()
{
    return(

<Aux>
    <Modal  modalClosed={this.purchaseCancelledHandle.bind(this)}  show={this.state.purchasing}> 
    <OrderSummary continue={this.purchaseContinuedHandler.bind(this)} cancel={this.purchaseCancelledHandle.bind(this)} ingredients={this.state.ingredients}></OrderSummary></Modal>
<Burger ingredients={this.state.ingredients}></Burger>
<BuildControls price={this.state.totalPrice} 
adding={this.addIngredientsHandler.bind(this)}  
subtracting={this.subtractIngredientHandler.bind(this)} 
purchasable={this.state.purchasable}
ordering={this.purchaseHandler.bind(this)}
></BuildControls>
</Aux>

    )


}

}