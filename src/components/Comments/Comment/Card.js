import './Card.css';

const Card = (props) => {
  return (
    <li className='card'>
      <div className='card-top'>
        <h3 className='card-name'>{props.comment.name}</h3>
        <span className='card-time'>{new Date(props.comment.created_at).toLocaleDateString()}</span>
      </div>
      <p className='card-text'>{props.comment.text}</p>
    </li>
  );
};

export default Card;
