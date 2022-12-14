import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Utils/Contexts/AuthProvider';
// import Admin from './Admin';
import Reported from './Admin/Reported';
import MyProducts from './MyProducts/MyProducts';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: loggedInUser = [], isLoading } = useQuery({
    queryKey: ['loggedInUser'],
    queryFn: () =>
      fetch(
        `https://assignment-12-server-side-eta.vercel.app/user?email=${user.email}`
      ).then((res) => res.json()),
  });
  return (
    <div className="lg:flex">
      <div className="xl:w-1/5 lg:w-2/5 w-full min-h-screen bg-gray-700 p-5">
        {loggedInUser.role === 'admin' ? (
          <>
            <h1 className="text-xl text-white font-bold">Admin Dashboard</h1>
            <div className="divider"></div>
            <ul>
              <li className="text-white font-bold">
                <Link
                  to="/dashboard/all-sellers"
                  className="block w-full p-2 my-2 hover:bg-gray-800"
                >
                  All Sellers
                </Link>
              </li>
              <li className="text-white font-bold">
                <Link
                  to="/dashboard/all-buyers"
                  className="block w-full p-2 my-2 hover:bg-gray-800"
                >
                  All Buyers
                </Link>
              </li>
              <li className="text-white font-bold">
                <button className="block text-left w-full p-2 my-2 bg-gray-800">
                  Reported Items
                </button>
              </li>
            </ul>
          </>
        ) : loggedInUser.role === 'seller' ? (
          <>
            <h1 className="text-xl text-white font-bold">Seller Dashboard</h1>
            <div className="divider"></div>
            <ul>
              <li className="text-white font-bold">
                <Link
                  to="/dashboard/my-product"
                  className="block w-full p-2 my-2 bg-gray-800 hover:bg-gray-800"
                >
                  My Products
                </Link>
              </li>
              <li className="text-white font-bold">
                <Link
                  to="/dashboard/add-product"
                  className="block w-full p-2 my-2 hover:bg-gray-800"
                >
                  Add a Product
                </Link>
              </li>

              <li className="text-white font-bold">
                <Link
                  to="/dashboard/my-buyers"
                  className="block w-full p-2 my-2 hover:bg-gray-800"
                >
                  My Buyers
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h1 className="text-xl text-white font-bold">User Dashboard</h1>
            <div className="divider"></div>
            <ul>
              <li className="text-white font-bold">
                <button className="block w-full p-2 my-2 text-left bg-gray-800">
                  My Orders
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
      <div className="p-8 xl:w-4/5 lg:w-3/5 w-full min-h-screen">
        {isLoading ? (
          <div className="flex justify-center items-center w-full my-6">
            <progress className="progress w-56 mx-auto"></progress>
          </div>
        ) : loggedInUser.role === 'seller' ? (
          <MyProducts></MyProducts>
        ) : loggedInUser.role === 'admin' ? (
          <Reported></Reported>
        ) : (
          <UserDashboard></UserDashboard>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
