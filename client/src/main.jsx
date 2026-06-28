import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { SyncProvider } from './context/SyncContext.jsx';
import { UnitsProvider } from './context/UnitsContext.jsx';
import { TimeRangeProvider } from './context/TimeRangeContext.jsx';
import App from './App.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <SyncProvider>
            <UnitsProvider>
              <TimeRangeProvider>
                <App />
              </TimeRangeProvider>
            </UnitsProvider>
          </SyncProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
