import React from 'react';
import { createStore,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import Navigation from './app/navigator/Navigation';
import configureStore from './app/store/Store';

const store = configureStore();
export default function App() {

  return(
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}