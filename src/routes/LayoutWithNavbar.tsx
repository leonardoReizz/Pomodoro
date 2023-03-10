import { Navbar } from '@components/Navbar';
import { Outlet } from 'react-router-dom';
import { AppContainer } from './styles';

export function LayoutWithNavbar() {
  return (
    <AppContainer>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </AppContainer>
  );
}
