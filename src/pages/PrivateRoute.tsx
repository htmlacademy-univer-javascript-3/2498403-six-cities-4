import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute } from '../const';
import { RootState } from '../store';
import {AuthorizationStatus, PrivateRouteProps} from '../types/types';

function PrivateRoute({ children }: PrivateRouteProps) : JSX.Element {
  const authorizationStatus = useSelector((state: RootState) => state.rentals.authorizationStatus.status);

  return (authorizationStatus === AuthorizationStatus.Authenticated ? children : <Navigate to={AppRoute.Login}/>);
}

export default PrivateRoute;
