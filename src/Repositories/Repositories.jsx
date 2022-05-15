import { useContext, useMemo } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { Paginate } from '../Components/Paginate/Paginate';
import { RepositoryItem } from '../Components/RepositoryItem/RepositoryItem';
import styles from './Repositories.module.css';

export const Repositories = () => {
  const { repositories, perPage, user } = useContext(GlobalContext);
  const repositoryComponents = useMemo(
    () =>
      repositories?.map(({ id, name, description, html_url }) => (
        <RepositoryItem key={id} name={name} description={description} url={html_url} />
      )),
    [repositories]
  );

  return (
    <div className={styles.repositories}>
      <h2 className={styles.pageTitle}>
        Repositories <span>({user.public_repos})</span>
      </h2>
      <ul className={styles.repositoriesList}>{repositoryComponents}</ul>
      <Paginate user={user} perPage={perPage} />
    </div>
  );
};
