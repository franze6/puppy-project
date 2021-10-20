import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './utils/routes';

ReactDOM.render(<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>, document.querySelector('#root'));
