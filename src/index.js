import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import store, { persist } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader/Loader';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persist}>
        <BrowserRouter basename={'/goit-react-hw-08-phonebook'}>
        <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
