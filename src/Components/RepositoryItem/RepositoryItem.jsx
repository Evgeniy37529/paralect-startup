import styles from './RepositoryItem.module.css';

export const RepositoryItem = ({ name, description, url }) => {
  return (
    <a href={url} className={styles.repositoriesItem} target="_blank" rel="noreferrer">
      <li>
        <h4 className={styles.repositoriesName}>{name}</h4>
        {description && <p className={styles.repositoriesDescription}>{description}</p>}
      </li>
    </a>
  );
};
