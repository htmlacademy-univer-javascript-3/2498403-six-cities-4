import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../store';
import { AuthorizationStatus } from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logout} from '../../api/api-actions';

export function HeaderUserInfo() {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state: RootState) => state.rentals.authorizationStatus);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus.status === AuthorizationStatus.Authenticated && authorizationStatus.user ? (
          <>
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img src={authorizationStatus.user.avatarUrl} alt="User avatar" />
                </div>
                <span className="header__user-name user__name">{authorizationStatus.user.email}</span>
                <span className="header__favorite-count">3</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout" onClick={handleLogout}>Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item">
            <a className="header__nav-link">
              <Link to={AppRoute.Login}>
                <span className="header__signout">Sign in</span>
              </Link>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

