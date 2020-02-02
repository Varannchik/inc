import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MainCont from './containers/MainCont'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        xyz
        <MainCont/>
      </div>
    </Provider>
  );
}

export default App;
