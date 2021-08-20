import './PaginationArrow.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const PaginationArrow = (props) => {
  return (
    <button
      className={`Pagination-arrow ${
        props.next ? 'Pagination-arrow-next' : 'Pagination-arrow-prev'
      }`}
      aria-label={`${props.next ? 'Следующая страница' : 'Предыдущая страница'}`}
      type='button'
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.next ? <BsChevronRight /> : <BsChevronLeft />}
    </button>
  );
};

export default PaginationArrow;
