import React from 'react';
import ReactModal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CyclesContextProvider } from '@contexts/CyclesContext/CyclesContext';
import { AppRoutes } from './routes';
import { UserContextProvider } from '@contexts/UserContext/UserContext';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

ReactModal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <CyclesContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CyclesContextProvider>
      </UserContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
