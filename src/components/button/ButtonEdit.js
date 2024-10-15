import React from 'react';
import './ButtonEdit.scss'

const ButtonEdit = (props) => {
    return (
        <button 
            className='button-edit' 
            onClick={props.onClick}
            >
            <span className='button-text'>
                {props.text}
            </span>
        </button>
    );
};

export default ButtonEdit;