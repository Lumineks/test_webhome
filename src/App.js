import { useEffect, useState } from 'react';
import './App.css';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';
import CommentService from './API/CommentService';
import { useFetching } from './hooks/useFetching';

function App() {
  const [comments, setComments] = useState([]);
  const [totalPagesCount, setTotalPagesCount] = useState(1);
  const [page, setPage] = useState(1);

  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await CommentService.getComments(page);
    setComments(response.data);
    setTotalPagesCount(response.last_page);
  });

  useEffect(() => {
    // fetchPosts();

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
  }, [page]);

  const createCommentHandler = (comment) => {
    /// post request
  };

  const goToHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Тестовое задание</h1>
        <Form />
        {error ? (
          <p className='error'>Произошла ошибка, попробуйте обновить страницу</p>
        ) : isLoading ? (
          <div className="loader"></div>
        ) : (
          <Comments comments={comments} currentPage={page} lastPage={totalPagesCount} goTo={goToHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
