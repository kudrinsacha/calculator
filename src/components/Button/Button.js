import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div className={props.value === '/' ? 'button orange' : props.value === '*' ? 'button orange' : props.value === '-' ? 'button orange' : props.value === '+' ? 'button orange' : props.value === '=' ? 'button orange' : props.value === 'C' ? 'button clear' : props.value === '0' ? 'button null' : 'button'}>
            {props.children}
        </div>
    );
};
export default Button;