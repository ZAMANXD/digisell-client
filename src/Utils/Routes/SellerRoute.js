import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthProvider';

const SellerRoute = () => {
  const { user } = useContext(AuthContext);
  const url = `https://assignment-12-server-side-eta.vercel.app/user?email=${user.email}`;

  useEffect(() => {
    axios.get(url).then((res) => console.log(res.data));
  }, [url]);
  return <div></div>;
};

export default SellerRoute;
