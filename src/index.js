
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { Provider} from 'react-redux';
import Store from './components/Store/index'





ReactDOM.render(

  <Provider store = {Store}>
    <App />
    </Provider>,
=======
import { Provider } from 'react-redux';
import store from "./components/store/Index"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> 87b81a4b06e2bf1ddab1483a145a97c921b14b66
  document.getElementById('root')
);


