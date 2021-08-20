import './Form.css';
import Button from "../Button/Button"

const Form = () => {
  return (
    <form className='form'>
      <div className='form-row'>
        <label className='form-label' htmlFor='field-username'>
          Введите ваше имя
        </label>
        <input
          className='form-input'
          id='field-username'
          name='name'
          type='text'
          required
          placeholder='Иван'
        />
      </div>
      <div className='form-row'>
        <label className='form-label' htmlFor='field-text'>
          Введите ваше сообщение
        </label>
        <textarea
          className='form-textarea'
          id='field-text'
          name='text'
          required
          placeholder='Ваш комментарий'></textarea>
      </div>
      <Button className='form-btn' type='submit' text='Отправить' />
    </form>
  );
};

export default Form;
