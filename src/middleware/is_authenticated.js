import React from "react";
import {Outlet, Navigate} from 'react-router-dom';
  
export const OnlyWhenNotLoggedIn = ({ children }) => {
    const authed = localStorage.getItem('token')
    return authed === null ?  <Outlet/> :<Navigate to="/" />;
  }