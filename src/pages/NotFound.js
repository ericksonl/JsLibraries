import React from 'react';
import '../styles/notFound.scss';

const NotFound = () => {
  return (
    <div id='container-404'>
      <div id='content-404'>
        <h1 id='title-404'>404 Not Found</h1>
        <p id='desc-404'>
          Oops! The page you are looking for might be in another universe.
        </p>
      </div>
    </div>
  );
};

export default NotFound;