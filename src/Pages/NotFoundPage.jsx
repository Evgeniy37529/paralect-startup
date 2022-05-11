import styles from './InitPage.module.css';
import { usePreloader } from '../servises/hooks';
export const NotFoundPage = () => {
  const preloader = usePreloader();
  return (
    <div className={styles.pageInit}>
      {preloader}
      <div className={styles.pageInitContent}>
        <div className={styles.pageInitContentImage}>
          <img
            width="64"
            height="64"
            src={require(`../assets/svg/notFound.svg`).default}
            alt="search"
          />
        </div>
        <p>User not found</p>
      </div>
    </div>
  );
};
