import React from 'react';
import Input from "../../../utilities/input";
import "./multipleSelector.style.scss";

export default function MultipleSelector({ children, handleSearch, search }){

  return (
  <div className="multiple-selector-wrapper">
    <Input type="search" label="Search Test's" name="search" onChange={handleSearch} value={search} />
    <div className="selector-list">
      { children }
    </div>
  </div>
  )
}