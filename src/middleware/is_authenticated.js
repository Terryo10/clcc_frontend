import React from "react";
import { Navigate} from 'react-router-dom';
  
export const LoggedInRoute = ({ children }) => {
    const authed = localStorage.getItem('token')
    
    return authed === null ?  children :<Navigate to="/" />;
  }