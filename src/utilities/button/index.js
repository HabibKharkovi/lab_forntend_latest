import React from 'react';
import './button.style.scss';

export default function Button(props){
    const { text, type="button" } = props;
    return (
        <button type={type} className="btn">
            {text}
        </button>
    )
}