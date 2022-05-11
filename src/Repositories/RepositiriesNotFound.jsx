import styles from './RepositiriesNotFound.module.css';
export const RepositoriesNotFound = () => {
  return (
    <div className={styles.repositoriesEmpty}>
      <div className={styles.notFound}>
        <div className={styles.repositoriesEmptyImgContainer}>
          <img
            src={require('../assets/svg/emptyRepository.svg').default}
            alt="Repository list is empty"
          />
        </div>
        <p>Repository list is empty</p>
      </div>
    </div>
  );
};
