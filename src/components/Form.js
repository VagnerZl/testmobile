import React from 'react';

import './Form.css';


export default function Form(props){


    return(
        <form className='form'>
            <textarea className='form-text' value={props.message} onChange={props.inputHandler} placeholder={'Напиши свое сообщение'}/>
            <button className="form-button" type="submit" onClick={props.submitHandler}>Send</button>
        </form>
    )
}