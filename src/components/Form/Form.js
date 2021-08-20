import './Form.css';
import Button from '../UI/Button/Button';
import '../UI/Field/Field.css';
import InputField from '../UI/Field/InputField/InputField';
import Textarea from '../UI/Field/TextareaField/TextareaField';

const Form = () => {
  return (
    <form className='form'>
      <div className='form-row'>
        <InputField
          label='Введите ваше имя'
          id='field-username'
          name='name'
          type='text'
          placeholder='Иван'
          required
        />
      </div>
      <div className='form-row'>
        <Textarea
          label='Введите ваше сообщение'
          id='field-text'
          name='text'
          placeholder='Ваш комментарий'
          required
        />
      </div>
      <Button className='form-btn' type='submit' text='Отправить' />
    </form>
  );
};

export default Form;
