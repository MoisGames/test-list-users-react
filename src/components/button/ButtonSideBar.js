import React from 'react';
import './ButtonSideBar.scss'

const ButtonSideBar = (props) => {
    return (
        <button
            className='button-sidebar' 
            type='text'
            onClick={props.onClick}
            >
                <span 
                    className='button-text'>
                    {props.text}
                </span>
        </button>
    );
};

export default ButtonSideBar;