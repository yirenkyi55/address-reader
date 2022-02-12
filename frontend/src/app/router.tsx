import { Loader } from '@mantine/core';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth/auth.layout';
import LoginPage from './views/pages/login.page';
import RegisterPage from './views/pages/register.page';

const Router = () => {
  return (
    <Suspense fallback={<Loader size='lg' variant='dots' />}>
      <Routes>
        <Route path='/' element={<Navigate replace to='/auth' />} />
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='' element={<Navigate replace to='login' />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
      </Routes>
      ;
    </Suspense>
  );
};

export default Router;
