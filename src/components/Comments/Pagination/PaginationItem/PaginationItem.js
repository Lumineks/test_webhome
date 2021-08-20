import './PaginationItem.css';

const PaginationItem = (props) => {
  return (
    <li className='Pagination-item'>
      <button className={`Pagination-btn ${props.active ? 'active' : ''}`} type='button' onClick={props.onClick}>
        {props.number}
      </button>
    </li>
  );
};

export default PaginationItem;
