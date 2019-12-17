import React from 'react';

function Button(props) {
    if (props.href) {
        return (
        <button className='btn btn-secondary card-buttons'>
            <a href={props.href}>{props.children}</a>
        </button>
        )
    }
    else if (props.onClick) {
        return (
            <button 
            className='btn btn-secondary card-buttons'
            onClick={props.onClick}
            data-id={props.id} 
            >
            {props.children}
        </button>
        )
    }

}

export default Button;