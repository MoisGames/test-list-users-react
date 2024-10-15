import React from 'react';
import './InputStandart.scss'

const InputStandart = (props) => {
    return (
        <article className='input-standart__wrapper'>
            <span 
                className='input-standart__title'>
                    {props.textTitle}
            </span>
            <input 
                className='input-standart__input'
                type={props.type}
                value={props.value}
                disabled={props.disabled}
                >
            </input>
        </article>
    );
};

export default InputStandart;