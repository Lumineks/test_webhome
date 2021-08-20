import './Comments.css';
import CommentsList from './List/Comments-list';
import Button from '../UI/Button/Button';

const Comments = (props) => {
  return (
    <div>
      <h2 className='subtitle'>Комментарии</h2>

      <CommentsList comments={props.comments} />

      <Button className='load-btn' text='Показать еще' />
    </div>
  );
};

export default Comments;
