import React from 'react';
import "./tableHeader.style.scss";

export default function TableHeader({ children }){
    return (
        <div className="table-head">
            {children}
        </div>
    )
}