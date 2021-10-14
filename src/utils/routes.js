import { Redirect } from 'react-router-dom';
import React from 'react';

import { App } from '../App';
import PersonPage from '../Pages/PersonPage/PersonPage';
import PersonsDetail from '../Pages/PersonsDetail';
import MainPage from '../Pages/MainPage/MainPage';

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/123',
        exact: true,
        component: () => <Redirect to="/main/" />,
      },
      {
        path: '/main',
        exact: true,
        component: MainPage,
      },
      {
        path: '/persons',
        exact: true,
        component: PersonPage,
      },
      {
        path: '/persons/:id',
        exact: true,
        component: PersonsDetail,
      },
      {
        path: '/persons/search/:searchText',
        exact: true,
        component: PersonPage,
      },
    ],
  },
];
