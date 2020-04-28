import React from 'react';
import {Patient} from '../../svgIcons';
import {Link} from 'react-router-dom';
import './sidebar.style.scss';

export default function Sidebar(){
    console.log('sidbar')
    return(
        <div className="sidebar">
            <div className="brand-name">
                MLT
            </div>
            <ul className="menu-list">
                <li className="menu-item">
                    <Link className="menu-link" to="/patientList"><Patient/> <span className="text">New Patient</span></Link>
                </li>
            </ul>
        </div>
    )
}