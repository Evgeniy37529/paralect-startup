import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = () => {
  return (
    <div className="container pagination-container" style={{ marginLeft: 'auto' }}>
      <p>
        <span>5-8</span> of <span>249</span> items{' '}
      </p>
      <ReactPaginate
        previousLabel={'<'}
        pageCount={10}
        nextLabel={'>'}
        breakLabel={'...'}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active-page"
        // onPageChange={(data) => handlePageClick(data.selected)}
        // forcePage={page}
      />
    </div>
  );
};
