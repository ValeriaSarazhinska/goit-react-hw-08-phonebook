import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../RestrictedRoute';
import { Layout } from '../Layout';
import { PrivateRoute } from '../PrivateRoute';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import styled from '@mui/material/styles/styled';

import Box from '@mui/material/Box';
import { Navigation } from '../Navigation/Navigation';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const Main = styled(Box)({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '50px',
});

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Main>
      {isRefreshing ? (
     <Loader/>
      ) : (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path='/register'
              element={
                <RestrictedRoute
                  redirectTo='/contacts'
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute
                  redirectTo='/contacts'
                  component={<LoginPage />} />
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
              }
            />
          </Route>
          <Route path="*" element={<Navigation to="/" />} />
        </Routes>
      )}
    </Main>
  );
};
