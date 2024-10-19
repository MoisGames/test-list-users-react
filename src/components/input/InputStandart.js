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
                className={props.classValidate}
                type={props.type}
                value={props.value}
                disabled={props.disabled}
                placeholder={props.placeholder}
                onChange={props.onChange}
                >
            </input>
        </article>
    );
};

export default InputStandart;