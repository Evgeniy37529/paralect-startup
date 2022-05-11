import { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  const [value, setValue] = useState('');
  const { getUser, getRepositories, setUserValue } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(value);
    setUserValue(value);
    getRepositories(value);
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <form className={styles.searchGroup} onSubmit={handleSubmit}>
          <Link to="/" className={styles.logo}>
            <img src={require(`../../assets/svg/logo.svg`).default} alt="logo" />
          </Link>
          <div className={styles.searchContainer}>
            <img src={require(`../../assets/svg/search.svg`).default} alt="search" />
            <input
              className={styles.search}
              type="search"
              placeholder="Enter GitHub username"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </form>
      </div>
    </header>
  );
};
