import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if(loading){
    return <Loading/>
  }
  if(user){
    return children;
  }
  else {
    return <Navigate to='/login'></Navigate>
  }
};

export default PrivateRoute;