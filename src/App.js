import { useEffect, useState } from 'react';
import './App.css';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';
import CommentService from './API/CommentService';
import { useFetching } from './hooks/useFetching';
import Spinner from './components/UI/Spinner/Spinner';
import Pagination from './components/Comments/Pagination/Pagination';
import Button from './components/UI/Button/Button';

function App() {
  const [comments, setComments] = useState([]);
  const [totalPagesCount, setTotalPagesCount] = useState(1);
  const [page, setPage] = useState(1);
  const [loadTimes, setLoadTimes] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isUpdated, setIsUpdated] = useState(true);

  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await CommentService.getComments(page);
    setComments(response.data);
    setTotalPagesCount(response.last_page);
    setTotalAmount(response.total);
    setLoadTimes(0);
    setIsUpdated(true);
  });

  const [loadMorePosts] = useFetching(async () => {
    const response = await CommentService.getComments(page + loadTimes + 1);
    setComments((prevComments) => [...prevComments, ...response.data]);
    setLoadTimes((prevLoadTimes) => prevLoadTimes + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, isUpdated]);

  const goToHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  const updateHandler = () => {
    setPage(1);
    setIsUpdated(false);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Тестовое задание</h1>
        <Form update={updateHandler} />
        {error ? (
          <p className='error'>Произошла ошибка, попробуйте обновить страницу</p>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <>
            <Comments
              comments={comments}
              currentPage={page}
              lastPage={totalPagesCount}
              goTo={goToHandler}
              loadMore={loadMorePosts}
              total={totalAmount}
            />

            <Button
              className={`load-btn ${
                totalAmount > comments.length &&
                page !== totalPagesCount &&
                page + loadTimes < totalPagesCount
                  ? 'visible'
                  : ''
              }`}
              text='Показать еще'
              onClick={loadMorePosts}
            />
          </>
        )}
        <Pagination
          currentPage={page}
          lastPage={totalPagesCount}
          goTo={goToHandler}
          visible={isLoading ? false : true}
        />
      </div>
    </div>
  );
}

export default App;
