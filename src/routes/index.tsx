/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Home } from '@pages/Home';
import { History } from '@pages/History';
import { LayoutWithNavbar } from './LayoutWithNavbar';
import { Login } from '@pages/Login';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
}
