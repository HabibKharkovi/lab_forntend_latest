import React from 'react';
import './header.style.scss';

export default function Header(){
    console.log('header')
    return(
        <header className="header">
            <div className="menu-btn">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    )
}