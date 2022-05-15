import styles from './InitPage.module.css';
import { usePreloader } from '../servises/hooks';

export const InitPage = () => {
  const preloader = usePreloader();

  return (
    <div className={styles.pageInit}>
      {preloader}
      <div className={styles.pageInitContent}>
        <div className={styles.pageInitContentImage}>
          <img
            width="64"
            height="64"
            src={require(`../assets/svg/searchBig.svg`).default}
            alt="search"
          />
        </div>
        <p>Start with searching a GitHub user</p>
      </div>
    </div>
  );
};
