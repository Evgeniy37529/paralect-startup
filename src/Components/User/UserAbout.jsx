import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import styles from './UserAbout.module.css';

export const UserAbout = () => {
  const { user } = useContext(GlobalContext);
  const { name, followers, following, login, avatar_url } = user;
  return (
    <div className={styles.user}>
      <div className={styles.userImage}>
        <img src={avatar_url} alt="avatar" />
      </div>
      <h3 className={styles.userName}>{name}</h3>
      <p className={styles.nickName}>{login}</p>
      <div className={styles.followers}>
        <div>
          <img src={require('../../assets/svg/followers.svg').default} alt="foloowers" />
          <p>
            <span>{followers}</span> followers
          </p>
        </div>
        <div>
          <img src={require('../../assets/svg/follower.svg').default} alt="foloowers" />
          <p>
            <span>{following}</span> following
          </p>
        </div>
      </div>
    </div>
  );
};
