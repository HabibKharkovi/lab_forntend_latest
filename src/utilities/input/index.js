import React, { useState, useEffect } from "react";
import "./input.style.scss";

export default function Input(props) {
  const {
    onChange,
    id,
    type,
    placeholder,
    name,
    value,
    label,
    multipleSelector = false,
    required = false,
    checked = null,
    disabled = false,
  } = props;

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if(type !== 'checkbox' && type !== 'radio'){
      if(value){
        setFocus(true)
      }
    }
  }, [value])

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    if(!value){
        setFocus(false)
    } else {
        setFocus(true)
    }
  }

  return (
    <div
      className={`${
        multipleSelector ? "control-group multiple-selector" : 'control-group'
      } ${name}`}
    >
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        className="input-field"
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        checked={checked}
        disabled={disabled}
      />
      {label ? (
        <label className={`label-tag ${focus ? 'focus' : ''}`} htmlFor={id}>
          {/* custom checkbox field */}
          {type === "checkbox" ? (
            <span className="checkbox">
              <span className="checkbox-tick" />
            </span>
          ) : null}

          {/* custom radio field */}
          {type === "radio" ? (
            <span className="radio">
              <span className="radio-dot" />
            </span>
          ) : null}

          {label}
        </label>
      ) : null}
    </div>
  );
}