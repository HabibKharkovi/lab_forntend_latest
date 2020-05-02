import React from 'react';
import Table from '../../../utilities/table';
import TableHeader from '../../../utilities/table/tableHeader';
import TableBody from '../../../utilities/table/tableBody';
import Button from '../../../utilities/button';
import './patientDetails.style.scss';

export default function PatientDetails() {

    return (
        <div className='patient-details-wrapper'>
            <h3 className="title">Patient Details</h3>
            <div className="name-field">
                <span className="label">Name</span>
                <span className="value">Rehman shah</span>
                <span className="status">pending</span>
            </div>
            <div className="patient-info">
                <div className="left">
                    <div className="output-field">
                        <span className="label">Age</span>
                        <span className="value">43 years</span>
                    </div>
                    <div className="output-field">
                        <span className="label">Gender</span>
                        <span className="value">Male</span>
                    </div>
                    <div className="output-field">
                        <span className="label">Contact No.</span>
                        <span className="value">0335849384</span>
                    </div>
                    <div className="output-field">
                        <span className="label">Email</span>
                        <span className="value">rehman@gmail.com</span>
                    </div>
                    <div className="output-field">
                        <span className="label">Panel</span>
                        <span className="value">Agency company</span>
                    </div>
                </div>
                <div className="right">
                    <div className="output-field">
                        <span className="label">MR No.</span>
                        <span className="value">2020-20-4234</span>
                    </div>
                    <div className="output-field">
                        <span className="label">Lab No.</span>
                        <span className="value">101</span>
                    </div>
                    <div className="output-field">
                        <span className="label">Date</span>
                        <span className="value">20-02-0292</span>
                    </div>
                    <div className="output-field">
                        <span className="label">Refered By</span>
                        <span className="value">dr. raza</span>
                    </div>
                </div>
            </div>
            <div className="patient-test">
                <Table>
                    <TableHeader>
                        <div className="tr">
                            <div className="th no">No.</div>
                            <div className="th test-name">Test Name</div>
                            <div className="th  report">Report</div>
                        </div>
                    </TableHeader>
                    <TableBody>
                        <div className="tr">
                            <div className="td no">1</div>
                            <div className="td test-name">Hemoglobin A1C</div>
                            <div className="td report"></div>
                        </div>
                        <div className="tr">
                            <div className="td no">2</div>
                            <div className="td test-name">Prothrombin Time</div>
                            <div className="td report"></div>
                        </div>
                        <div className="tr">
                            <div className="td no">3</div>
                            <div className="td test-name">Thyroid Stimulating Hormone</div>
                            <div className="td report"></div>
                        </div>
                    </TableBody>
                </Table>
                <div className="btn-group">
                    <Button
                        text="Edit"
                    />
                    <Button
                        text="Print"
                    />
                </div>
            </div>
        </div>
    )
    
}