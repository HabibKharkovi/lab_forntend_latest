import React, { useState } from 'react';
import "./table.style.scss";


export default function Table({ children }){
    return (
        <div className="table-responsive">
            <div className="table">
                {children}
            </div>
        </div>
    )
}