import React from 'react';

export const InitPage = () => {
  return (
    <div className="page-init">
      <div className="page-init_content">
        <div className="page-init_content_image">
          <img
            width="64"
            height="64"
            src={require(`../assets/svg/searchBig.svg`).default}
            alt="search"
          />
        </div>
        <p>Start with searching a GitHub user</p>
      </div>
    </div>
  );
};
