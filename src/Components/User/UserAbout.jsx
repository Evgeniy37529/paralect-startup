import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
export const UserAbout = () => {
  const { user } = useContext(GlobalContext);
  const { name, followers, following, login } = user;
  return (
    <div className="user">
      <div className="user-image">
        <img
          src={require('../../assets/K6PguVhT0W4l1UOZh4clDO4636R5AF73hxli1MpWr28DYmO3sQUMWj2jKEIr9J8EV4efuSMs.jpg')}
          alt="avatar"
        />
      </div>
      <h3 className="user-name">{name}</h3>
      <p className="nick-name">{login}</p>
      <div className="followers">
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
