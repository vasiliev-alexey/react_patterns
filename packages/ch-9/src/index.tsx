import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorScreen from './components/ErrorScreen';

import '../public/main.css';

ReactDOM.render(
  <React.StrictMode>
    <App />;
  </React.StrictMode>,
  document.getElementById('root')
);
