import { useEffect } from 'react';
import './App.css';

function App() {
  

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Тестовое задание</h1>
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
          <button className='form-btn button' type='submit'>
            Отправить
          </button>
        </form>

        <div className='list'></div>
      </div>
    </div>
  );
}

export default App;
