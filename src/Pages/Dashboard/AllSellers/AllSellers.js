import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Utils/Contexts/AuthProvider';
import Sellers from './Sellers/Sellers';

const AllSellers = () => {
  // const userData = useLoaderData()/
  const { user } = useContext(AuthContext);
  const { email } = user;
  const url = `https://assignment-12-server-side-eta.vercel.app/user?email=${user.email}`;
  const [role, setRole] = useState('user');
  const navigate = useNavigate();
  console.log(email, url);

  useEffect(() => {
    axios.get(url).then((res) => setRole(res.data.role));
  }, [url]);

  return (
    <div>
      {user.email ? (
        role === 'admin' ? (
          <Sellers></Sellers>
        ) : (
          navigate('/dashboard')
        )
      ) : (
        <h1>Not Logged In</h1>
      )}
    </div>
  );
};

export default AllSellers;
