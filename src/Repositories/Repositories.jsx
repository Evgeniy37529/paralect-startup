import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { Pagination } from '../Components/Paginate/Paginate';
import { RepositoryItem } from '../Components/RepositoryItem/RepositoryItem';
import styles from './Repositories.module.css';

export const Repositories = () => {
  const { repositories, perPage, user } = useContext(GlobalContext);
  const repositoryComponents = repositories?.map(({ id, name, description }) => (
    <RepositoryItem key={id} name={name} description={description} />
  ));
  return (
    <div className={styles.repositories}>
      <h2 className={styles.pageTitle}>
        Repositories <span>({user.public_repos})</span>
      </h2>
      <ul className={styles.repositoriesList}>{repositoryComponents}</ul>
      <Pagination user={user} perPage={perPage} />
    </div>
  );
};
