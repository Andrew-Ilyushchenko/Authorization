import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import BlogsPage from './pages/BlogsPages';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/login'} replace />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registration' element={<RegistrationPage />} />
      <Route path='blogs' element={<BlogsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
