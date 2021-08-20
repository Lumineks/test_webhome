import React from 'react';
import './InputField.css';

const InputField = React.forwardRef((props, ref) => {
  return (
    <>
      <label className='Label' htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className='Input'
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        ref={ref}
      />
    </>
  );
});

export default InputField;
