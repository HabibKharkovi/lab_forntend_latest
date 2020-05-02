import React, { useState } from 'react';
import PatientForm from './patientForm';
import PatientTable from './patientTable';
import PatientDetalils from './patientDetails';
import { Route } from "react-router-dom";
import './patient.style.scss';

export default function PatientContent(){

    return (
        <div className="patient-wrapper">
            <div className="left">
                <PatientForm/>
            </div>
            <div className="right">
                <div className="box">
                    <Route path="/">
                       <PatientTable/> 
                    </Route>
                    <Route path="/patientDetails">
                        <PatientDetalils/> 
                    </Route>
                   
                </div>
            </div>
        </div>
    )
}