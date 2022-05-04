import React, { useContext } from 'react';
import { UserAbout } from '../Components/User/UserAbout';
import { Repositories } from '../Repositories/Repositories';
import { Pagination } from '../Components/Paginate/Paginate';
import { GlobalContext } from '../Context/GlobalContext';

export const ResultPage = () => {
  const { user, repositories } = useContext(GlobalContext);
  console.log(user);
  console.log(repositories);
  return (
    <div className="page">
      <div className="container page-result">
        <UserAbout />
        <Repositories />
      </div>
      <Pagination />
    </div>
  );
};
