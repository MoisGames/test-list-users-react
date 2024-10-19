import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './App';
import UserStore from './store/UserStore'

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider 
      value={{
        user: new UserStore(),
        context: new UserStore()
      }}
      >
        <App />
      </Context.Provider>
  </BrowserRouter>
  </React.StrictMode>
);
