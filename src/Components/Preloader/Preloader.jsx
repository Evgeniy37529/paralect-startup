import styles from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.preloader}></div>
    </div>
  );
};
