import './TextareaField.css';

const TextareaField = (props) => {
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
        required={props.required}></textarea>
    </>
  );
};

export default TextareaField;
