import React, { useRef } from 'react';
import './Form.css';
import Button from '../UI/Button/Button';
import '../UI/Field/Field.css';
import InputField from '../UI/Field/InputField/InputField';
import Textarea from '../UI/Field/TextareaField/TextareaField';

const Form = (props) => {
  const nameRef = useRef(null);
  const textRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const comment = { name: nameRef.current.value, text: textRef.current.value };

    fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json()).then(data => {
        console.log(data);
        props.update();
        alert('Комментарий отправлен - вы будете перенаправлены на первую страницу списка');
      })
      .catch((e) => alert(`что-то пошло не так(${e.message})`));

    nameRef.current.value = '';
    textRef.current.value = '';
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='form-row'>
        <InputField
          label='Введите ваше имя'
          id='field-username'
          name='name'
          type='text'
          placeholder='Иван'
          required
          ref={nameRef}
        />
      </div>
      <div className='form-row'>
        <Textarea
          label='Введите ваше сообщение'
          id='field-text'
          name='text'
          placeholder='Ваш комментарий'
          required
          ref={textRef}
        />
      </div>
      <Button className='form-btn' type='submit' text='Отправить' />
    </form>
  );
};

export default React.memo(Form);
