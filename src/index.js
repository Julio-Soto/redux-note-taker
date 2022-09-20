import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import {noteCreated,noteErased} from './actions'
import { Provider } from 'react-redux';

store.dispatch(noteCreated('go shopping for toner'))
store.dispatch(noteCreated('the code for the site is 1234'))
store.dispatch(noteCreated('Pancho will arrive saturday 19th'))

//store.dispatch(noteErased(2))

console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

