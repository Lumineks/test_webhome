import CommentsList from './CommentList/Comments-list';
import Button from '../UI/Button/Button';
import Pagination from './Pagination/Pagination';

const Comments = (props) => {
  return (
    <div>
      {props.comments.length && (
        <>
          <h2 className='subtitle'>Комментарии</h2>
          <CommentsList comments={props.comments} />
        </>
      )}
    </div>
  );
};

export default Comments;
