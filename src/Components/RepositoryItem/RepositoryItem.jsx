import styles from './RepositoryItem.module.css';
export const RepositoryItem = ({ name, description }) => {
  return (
    <li className={styles.repositoriesItem}>
      <h4 className={styles.repositoriesName}>{name}</h4>
      {description && <p className={styles.repositoriesDescription}>{description}</p>}
    </li>
  );
};
