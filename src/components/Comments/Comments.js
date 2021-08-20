import './Comments.css';
import CommentsList from './CommentList/Comments-list';
import Button from '../UI/Button/Button';
import Pagination from './Pagination/Pagination';

const Comments = (props) => {
  return (
    <div>
      {props.lastPage !== 1 && (
        <>
          <h2 className='subtitle'>Комментарии</h2>
          <CommentsList comments={props.comments} />

          <Button className='load-btn' text='Показать еще' />

          <Pagination currentPage={props.currentPage} lastPage={props.lastPage} goTo={props.goTo} />
        </>
      )}
    </div>
  );
};

export default Comments;
