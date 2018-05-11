import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Lienzo from './_lienzo/lienzo';

import { BrowserRouter, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const routeIndex = (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Lienzo}/>
      </div>
    </BrowserRouter>
);

ReactDOM.render(
routeIndex, 
document.getElementById('root'));//selector
registerServiceWorker();
