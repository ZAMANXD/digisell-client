import React from 'react';
import broken from './404.jpg';
import './Broken.css';
import { Link } from 'react-router-dom';

const Broken = () => {
  return (
    <div className="text-center py-14">
      <img src={broken} className="brokenImg" alt="" />
      <h3 className="font-bold mt-5 text-4xl">Looks like you are lost</h3>
      <p className="mt-2">
        The page you are looking for is broken or does not exist. <br />
        <button className="btn btn-primary mt-5">
          <Link to="/">Please go back to the home page</Link>
        </button>
      </p>
    </div>
  );
};

export default Broken;
