import React, { useEffect, useRef } from 'react';
import './Pagination.css';
import PaginationItem from './PaginationItem/PaginationItem';
import PaginationArrow from './PaginationArrow/PaginationArrow';
import GetPages from './Utils/GetPages';

let leftNumber = 2;

const Pagination = (props) => {
  const { currentPage, lastPage, goTo, visible } = props;

  // Наверняка есть более элегантная реализация, еще не приходилось делать пагинацию, хотелось на первый раз сделать без копипаста готовых решений

  const leftNumber = useRef(currentPage + 1);

  switch (currentPage - leftNumber.current) {
    case 2:
      if (currentPage != lastPage - 1 && currentPage != lastPage) {
        leftNumber.current += 1;
      }
      break;
    case 0:
      if (currentPage !== 2) {
        leftNumber.current -= 1;
      }
      break;
    case 3:
      if (currentPage !== lastPage) {
        leftNumber.current -= 1;
      }
    default:
      break;
  }

  let numbers = [];

  // На случай малого кол-ва страниц
  switch (lastPage) {
    case 2:
      break;
    case 3:
      numbers = GetPages(leftNumber.current, leftNumber.current + 1);
      break;
    case 4:
      numbers = GetPages(leftNumber.current, leftNumber.current + 2);
      break;
    default:
      numbers = GetPages(leftNumber.current, leftNumber.current + 3);
      break;
  }

  return (
    <div className={`Pagination ${visible ? 'visible' : ''}`}>
      <button
        className={`Pagination-to Pagination-start ${currentPage === 1 ? 'active' : ''}`}
        type='button'
        onClick={() => {
          leftNumber.current = 2;
          goTo(1);
        }}>
        1
      </button>
      <PaginationArrow
        prev
        disabled={currentPage === 1 ? true : false}
        onClick={() => {
          goTo(currentPage - 1);
        }}
      />

      <ul className='Pagination-list'>
        {numbers.map((number) => (
          <PaginationItem
            number={number}
            key={number}
            active={currentPage === number}
            onClick={() => {
              goTo(number);
            }}
          />
        ))}
      </ul>

      <PaginationArrow
        next
        disabled={currentPage === lastPage ? true : false}
        onClick={() => {
          goTo(currentPage + 1);
        }}
      />
      <button
        className={`Pagination-to Pagination-end ${currentPage === lastPage ? 'active' : ''}`}
        type='button'
        onClick={() => {
          if (lastPage >= 6) {
            leftNumber.current = lastPage - 3;
          }
          goTo(lastPage);
        }}>
        {props.lastPage}
      </button>
    </div>
  );
};

export default Pagination;
