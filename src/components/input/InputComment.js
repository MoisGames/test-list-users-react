import React from 'react';
import './InputComment.scss'

const InputComment = (props) => {
    return (
        <article className='input-comment__wrapper'>
            <span 
                className='input-comment__title'
                >
                {props.textTitle}
            </span>
            <input 
                className='input-comment__input'
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

export default InputComment;