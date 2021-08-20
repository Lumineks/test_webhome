import './InputField.css';

const InputField = (props) => {
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
      />
    </>
  );
};

export default InputField;
