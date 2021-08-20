import React from 'react';
import './TextareaField.css';

const TextareaField = React.forwardRef((props, ref) => {
  return (
    <>
      <label className='Label' htmlFor={props.id}>
        {props.label}
      </label>
      <textarea
        className='Textarea'
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        ref={ref}></textarea>
    </>
  );
});

export default TextareaField;
