import React from "react";
import {Outlet, Navigate} from 'react-router-dom';
  
export const PrivateRoute = ({ children }) => {
    const authed = localStorage.getItem('token')
    return authed === null ?  <Navigate to="/login"/>  : <Outlet/> ;

}

