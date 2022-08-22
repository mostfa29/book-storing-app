import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// react-loader-spinner/dist/laoder/css/react-spinner-loader.css'
// import 'react-loader-spinner/dist/loader/'
import { Audio } from  'react-loader-spinner'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { preset } from '@rebass/preset';
import { QueryClientProvider,QueryClient } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={preset}>
    <BrowserRouter>
      <App />
        </BrowserRouter>
        
      </ThemeProvider>
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
