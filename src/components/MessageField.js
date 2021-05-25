
import React, { useState } from 'react';
import './MessageField.css';

export default function MessageField(props){


const MassageItems = props.messageList.map((message) =>
    <li className='typingLi' key={message}>
        {message}
    </li>
)



    return(
        <ul>
            {MassageItems}
        </ul>
    )
}