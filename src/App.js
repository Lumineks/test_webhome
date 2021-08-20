import { useEffect, useState } from 'react';
import './App.css';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';

function App() {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    async function myFunc() {
      async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return await response.json();
      }

      await postData('https://jordan.ashton.fashion/api/goods/30/comments', {
        name: 's123omename123',
        text: 'long long comment123123',
      }).then((data) => {
        console.log(data);
      });
    }
    // myFunc();
    // fetch('https://jordan.ashton.fashion/api/goods/30/comments?page=79')

  //   fetch('https://jordan.ashton.fashion/api/goods/30/comments')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setComments(data.data);
  //     })
  //     .catch((e) => console.error(e));
  }, []);

  console.log(comments);

  const createCommentHandler = (comment) => {
    /// post request
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Тестовое задание</h1>
        <Form />

        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default App;
