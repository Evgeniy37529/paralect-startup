import React, { useState, useContext } from 'react';
import { Navigate, Redirect } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

export const Header = () => {
  const [value, setValue] = useState('');
  const { getUser, getRepositories } = useContext(GlobalContext);
  //console.log(value);
  //getUser(value);
  //   if (value === 'b') {
  //     return <Redirect to="/not_found" />;
  //   }
  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(value);
    getRepositories(value);
  };
  return (
    <header className="header">
      <div className="container">
        <form className="search-group" onSubmit={handleSubmit}>
          <div className="logo">
            <img src={require(`../../assets/svg/logo.svg`).default} alt="logo" />
          </div>
          <div className="search-container">
            <img src={require(`../../assets/svg/search.svg`).default} alt="search" />
            <input
              className="search"
              type="search"
              placeholder="Enter GitHub username"
              //value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </form>
      </div>
    </header>
  );
};
