/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Home } from '@pages/Home';
import { History } from '@pages/History';
import { LayoutWithNavbar } from './LayoutWithNavbar';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<LayoutWithNavbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
