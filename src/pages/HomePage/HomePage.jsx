import React from 'react';
import { Link } from 'react-router-dom';
const Home = props => {
  return (
    <div>
      <div className="hero">
        <h1 className="title">Home page</h1>
        <p className="description">Welcome to Giphy gallery</p>
        <p className="description">
          Visit <Link to="/gifs">Gifs</Link> or{' '}
          <Link to="/other-gifs">Other Gifs</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
