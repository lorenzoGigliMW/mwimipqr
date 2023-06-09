import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './container/container';
import { Provider } from 'react-redux'
import configureStore from '../src/utils/configureStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={configureStore} >
      <Container/>
    </Provider>  

);
