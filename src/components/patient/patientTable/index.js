import React, { useState } from 'react';
import TableHeader from '../../../utilities/table/tableHeader';
import TableBody from '../../../utilities/table/tableBody';
import Table from '../../../utilities/table';
import { paginate } from '../../../utilities/paginate';
import Pagination from '../../../utilities/pagination';
import Input from '../../../utilities/input';
import { patientData } from '../../../api/patientData';
import {Link} from 'react-router-dom';
import './patientTable.style.scss';


export default function PatientTable(){

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ pageSize, setPageSize ] = useState(20);

    const handlePagination = page => {
        setCurrentPage(page);
    };

    const filters = paginate(patientData, currentPage, pageSize);

    return (
        <div className="table-wrapper">
            <h3 className="title">Patient List</h3>
            <div className="search-group">
                <Input
                    type="text"
                    label="MR No."
                    id="mr_no"
                    name="mr_no"
                />
                <Input
                    type="text"
                    label="Lab No."
                    id="lab_no"
                    name="lab_no"
                />
                <Input
                    type="text"
                    label="name"
                    id="name"
                    name="name"
                />
                <Input
                    type="text"
                    label="contact"
                    id="contact"
                    name="contact"
                />
            </div>
            <Table>
                <TableHeader>
                    <div className="tr">
                        <span className="th lab_no">Lab No.</span>
                        <span className="th name">Name</span>
                        <span className="th age">Age</span>
                        <span className="th mr_no">MR No.</span>
                        <span className="th contact">Contact No.</span>
                    </div>
                </TableHeader>
                <TableBody>
                    {filters.map(item =>
                        <div className="tr">
                            <span className="td lab_no">{item.lab_no}</span>
                            <span className="td name">{item.name}</span>
                            <span className="td age">{item.age}</span>
                            <span className="td mr_no">{item.mr_no}</span>
                            <span className="td contact">{item.contact}</span>
                            <div className="btn-group-wrapper">
                            <div className="btn-group">
                                <Link className="link-btn" to="/patientDetails">View</Link>
                                <Link className="link-btn" to="/">Edit</Link>
                                <Link className="link-btn" to="/">Print</Link>
                            </div>
                            </div>  
                        </div>
                    )}
                </TableBody>
            </Table>
            <Pagination
                handlePagination={handlePagination}
                totalItem={patientData.length}
                pageSize={pageSize}
                currentPage={currentPage}
            />
        </div>
    )
}