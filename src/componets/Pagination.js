import React from 'react';

const Pagination = ({userPerPage, totalUsers, paginate}) => {
  const pageNumbers= [];
  for (let i =1; i <= Math.ceil(totalUsers/userPerPage); i++){
    pageNumbers.push(i)
  }
  return (
    <ul className="pagination mt-3">
      {pageNumbers.map(num=> (<li className='page-item' key={num}>
        <a href="!#" className='page-link' onClick={()=>{paginate(num)}}>{num} </a>
      </li>))}
    </ul>
  );
};

export default Pagination;
