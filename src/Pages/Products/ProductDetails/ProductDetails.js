import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className="min-h-screen w-3/4 text-center mx-auto mt-12">
      <div className="mt-12 flex">
        <div className="image-section w-4/10">
          <img src={product.img} alt="" />
          {/* <Link to="/categoried-card">
            <button className="btn btn-primary  mt-4">Book Now</button>
          </Link> */}
        </div>
        <div className="details-section w-6/10 text-start">
          <h3 className="text-3xl">Product: {product.name}</h3>
          <p className="mt-4">seller: {product.seller}</p>
          <p className="mt-4">Seller Email: {product.selleremail}</p>
          <p className="mt-4">Seller Phone Number: {product.mobile}</p>
          <p className="mt-4">Location: {product.location}</p>
          <p className="mt-4">Category: {product.category}</p>
          <p className="mt-4">Condition: {product.condition}</p>
          <p className="mt-4">Description: {product.description}</p>
          <p className="mt-4">Purchase year: {product.yearofpurchase}</p>
          <p className="mt-4">Upload date: {product.today}</p>
          <p className="mt-4 text-green-500">Status: {product.status}</p>

          <p className="mt-4">OG Price: ${product.originalprice}</p>
          <p className="mt-4">Resell Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
