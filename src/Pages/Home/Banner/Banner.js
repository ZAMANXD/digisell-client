import React from 'react';
import { Link } from 'react-router-dom';
import banner from './banner.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="py-10 px-6 lg:w-5/6 w-full mx-auto">
      <div className="flex justify-between items-center">
        <div
          className="lg:w-1/2 w-full"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src={banner} alt="" />
        </div>
        <div className="lg:w-1/2 lg:pl-10 w-full" data-aos="fade-up">
          <h3 className="lsp-3">Sell all your faltu laptops here</h3>
          <h1 className="text-4xl font-bold mb-4">
            Buy and sell all the garbage products
          </h1>
          <p>
            Here you can buy and sell used laptop. You can also find new laptops
            for your home, office, shops.
          </p>

          <Link to="/products" className="btn btn-primary rounded-none mt-5">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
