import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const fakeAuth = true;
    if (!fakeAuth) return <Navigate to="/login"/> 
  return children
}

export default PrivateRoute