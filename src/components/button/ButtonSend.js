import React from 'react';
import './ButtonSend.scss'

const ButtonSend = (props) => {
    return (
        <button 
            className='button-send__wrapper' 
            onClick={props.onClick} 
            type={props.type}
            >
            {props.text}
        </button>
    );
};

export default ButtonSend;