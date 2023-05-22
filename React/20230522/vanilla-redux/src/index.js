import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';



const store = createStore(rootReducer);
console.log(store.getState());

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);