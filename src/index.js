import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import Accueil from './views/accueil';
import Search from './views/search';
import Favorite from './views/favorite';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="Home" element={<Accueil/>}></Route>
          <Route path="Search" element={<Search/>}></Route>
          <Route path="Favorite" element={<Favorite/>}></Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
