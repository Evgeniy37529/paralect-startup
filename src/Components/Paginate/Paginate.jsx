import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { GlobalContext } from '../../Context/GlobalContext';
import styles from './Paginate.module.css';

export const Pagination = () => {
  const { perPage, user, getRepositories, searchUser, currentPage, setCurrentPage } =
    useContext(GlobalContext);
  const totalPages = Math.ceil(user.public_repos / perPage);

  const handlePageClick = (numberPage) => {
    setCurrentPage(numberPage);
    getRepositories(searchUser, numberPage + 1);
  };

  return (
    <div className={`container ${styles.paginationContainer}`} style={{ marginLeft: 'auto' }}>
      <p>
        <span>{perPage}</span> of <span>{user.public_repos}</span> items{' '}
      </p>
      <ReactPaginate
        previousLabel={'<'}
        pageCount={totalPages}
        nextLabel={'>'}
        breakLabel={'...'}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        containerClassName={`${styles.pagination} justify-content-center`}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        breakClassName={styles.pageItem}
        breakLinkClassName={styles.pageLink}
        activeClassName={styles.activePage}
        onPageChange={(data) => handlePageClick(Number(data.selected))}
        forcePage={currentPage}
      />
    </div>
  );
};
