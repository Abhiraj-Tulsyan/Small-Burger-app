import React from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import AUX from '../../../../hoc/Auxy'

const Modal=(props)=>{
return(
<AUX>
    <Backdrop show={props.show} clicked={props.modalClosed}> </Backdrop>
<div style={{ display:  props.show?'initial': 'none' }} className={classes.Modal}>
 
 {props.children}

</div>
</AUX>
)



}
export default Modal