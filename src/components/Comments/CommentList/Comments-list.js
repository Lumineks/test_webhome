import './Comments-list.css';
import Card from '../Comment/Card';

const CommentsList = (props) => {
  const content = props.comments.map((item) => <Card comment={item} key={item.id} />);

  return <ul className='Comments-list'>{content}</ul>;
};

export default CommentsList;
