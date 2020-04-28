import React, { useState, useEffect } from "react";
import Input from "../../../utilities/input";
import Button from "../../../utilities/button";
import MultipleSelector from '../multipleSelector';
import {mr_no_generator} from '../../../utilities/generator';
import * as moment from 'moment';
import { dataApi } from "../../../api/selectData";
import "./form.style.scss";

export default function PatientForm() {
 
  const [data, setData] = useState({
    name: '',
    age: '',
    contact_no: '',
    gender: 'male',
    ref_by: '',
    date: '',
    panel: '',
    discount: '',
    paid: '',
    mr_no: '',
    lab_no: 101,
    email: '',
    recep_name: 'Hiba Ahmad'
  });

  const { name, age, contact_no, ref_by, date, paid, panel, discount, gender, mr_no, lab_no, email, recep_name } = data;

  console.log('patient form')

  const [selectedTest, setSelectedTest] = useState([]);
  const [search, setSearch] = useState("");
  const [tests, setTests] = useState([]);

  useEffect(() => setTests(dataApi), []);

  const handleSearch = e => {
    setTests(dataApi);
    if (e.target.value !== "") {
      const filterData = tests.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTests(filterData);
    }
    setSearch(e.target.value);
  };
  
  const handleChange = e => {
     const value = e.target.value;
     const name = e.target.name;
     console.log(data)
     setData({...data, [name] : value})
  }

  const handleMultipleSelector = (item, e) => {
    if(e.target.checked){
      setSelectedTest([...selectedTest, item])
    } else {
      const filterTests = selectedTest.filter(test => test.id !== item.id);
      setSelectedTest(filterTests);
    }
  }

  useEffect(() => {
    setData({...data, "mr_no": mr_no_generator(), "date": moment().format('MM-DD-YYYY')})
  }, [])

  // total price of test's
  const total = () => {
    let total = 0;
    if(selectedTest.length > 0){
      selectedTest.map(item => {
      return (total += item.price);
      })
    }
    return total;
  };
 
  return (
   <div className={`form-wrapper box ${selectedTest.length === 0 ? 'col-2' : ''}`}>
     <h2 className="title">New Patient</h2>
     <form className="patient-form">
       <div className={`${selectedTest.length === 0 ? 'col-1 col-half' : 'col-1'}`}>
        <Input
          type="text"
          label="Date"
          id="date"
          name="date"
          onChange={handleChange}
          value={date}
          disabled
        />
        <div className="form-group">
          <Input
            type="text"
            label="MR No."
            id="mr_no"
            name="mr_no"
            onChange={handleChange}
            value={mr_no}
            disabled
          />
          <Input
            type="text"
            label="Lab No."
            id="lab_no"
            name="lab_no"
            onChange={handleChange}
            value={lab_no}
            disabled
          />
        </div>
        <Input
          type="text"
          label="Receptionist Name"
          id="recep_name"
          name="recep_name"
          onChange={handleChange}
          value={recep_name}
          disabled
        />
        <Input
          type="text"
          label="Name"
          id="name"
          name="name"
          onChange={handleChange}
          value={name}
        />
        <div className="radio-group">
          <Input 
            type="radio" 
            id="male" 
            name="gender" 
            onChange={handleChange} 
            value="male" 
            label="Male" 
            checked={gender === 'male' ? true : null}
          />
            <Input type="radio" 
              id="female" 
              name="gender"
              onChange={handleChange} 
              value="female" 
              label="Female"
              checked={gender === 'female' ? true : null}
            />
            <Input 
              type="radio" 
              id="other" 
              name="gender" 
              onChange={handleChange} 
              value="other" 
              label="Other" 
              checked={gender === 'other' ? true : null}
            />
        </div>
        <Input
          type="text"
          label="Age"
          id="age"
          name="age"
          onChange={handleChange}
          value={age}
        />
        <Input
          type="text"
          label="Contact No"
          id="contact_no"
          name="contact_no"
          onChange={handleChange}
          value={contact_no}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <Input
          type="text"
          label="Refered by"
          id="ref_by"
          name="ref_by"
          onChange={handleChange}
          value={ref_by}
        />
        <Input
          type="text"
          label="Panel"
          id="panel"
          name="panel"
          onChange={handleChange}
          value={panel}
        />
        
      </div>
      <div className={`${selectedTest.length === 0 ? 'col-2 col-half' : 'col-2'}`}>
        <MultipleSelector
          handleSearch={handleSearch}
          search={search}
        >
          {tests.map(item => (
            <Input
              key={item.id}
              id={item.id}
              type="checkbox"
              value={item.name}
              name={item.id}
              label={item.name}
              onChange={e => handleMultipleSelector(item, e)}
              className="multiple-selector"
              multipleSelector
            />
          ))}
        </MultipleSelector>
      </div>
      {selectedTest.length !== 0 ?
      <div className="col-3">
        <Input
          onChange={handleChange}
          type="text"
          label="Discount"
          name="discount"
          value={discount}
        />
        <Input
          type="text"
          label="Paid"
          id="paid"
          name="paid"
          onChange={handleChange}
          value={paid}
        />
        <div className="list-wrapper">
          <ul className="list">
          {selectedTest.length > 0 ? selectedTest.map(item => (
            <li className="list-item" key={item.id}>{`${item.name}`}<span className="price">Rs {item.price}</span></li>
          )) : null}
          </ul>
        </div>
        <div className="account-wrapper">
          <div className="price-tag total-price">Total Amount: <span className="number">Rs {total()}</span></div>
          <div className="price-tag discount-price">Discount in %: <span className="number">{discount}%</span></div>
          <div className="price-tag discount-price">Discount in Rs: <span className="number">Rs {(discount / 100) * total()}</span></div>
          <div className="price-tag total-price"> Total after Discount: <span className="number">Rs {total() - (discount / 100) * total()}</span></div>
          <div className="price-tag paid-price"> Paid: <span className="number">Rs {paid}</span></div>
          <div className="price-tag remaining-price"> Remaining Amount: <span className="number">Rs {total() - paid}</span></div>
        </div>
      </div> : null }
      <div className="btn-group">
          <Button
            type="submit"
            text="Save"
          />
          <Button
            text="Print"
          />
      </div>
     </form>
   </div>
  );
}
