import React from 'react';
import "./tableBody.style.scss";

export default function TableBody({ children }){
    return (
        <div className="table-body">
            {children}
        </div>
    )
}