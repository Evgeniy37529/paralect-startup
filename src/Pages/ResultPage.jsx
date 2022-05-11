import { useContext } from 'react';
import { UserAbout } from '../Components/User/UserAbout';
import { Repositories } from '../Repositories/Repositories';
import { GlobalContext } from '../Context/GlobalContext';
import { RepositoriesNotFound } from '../Repositories/RepositiriesNotFound';
import { usePreloader } from '../servises/hooks';
import styles from './ResultPage.module.css';

export const ResultPage = () => {
  const { repositories } = useContext(GlobalContext);
  const preloader = usePreloader();
  return (
    <div className={(styles.page, styles.resultContent)}>
      <div className={`container ${styles.pageResult}`}>
        {preloader}
        <UserAbout />
        {repositories.length ? <Repositories /> : <RepositoriesNotFound />}
      </div>
    </div>
  );
};
