import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Home } from '@pages/Home';
import { LayoutWithNavbar } from './LayoutWithNavbar';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
