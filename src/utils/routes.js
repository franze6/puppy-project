import { Redirect } from 'react-router-dom';
import React from 'react';

import { App } from '../App';
import Person from '../Pages/Person';
import PersonsDetail from '../Pages/PersonsDetail';

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/123',
        exact: true,
        component: () => <Redirect to="/persons" />,
      },
      {
        path: '/persons',
        exact: true,
        component: Person,
      },
      {
        path: '/persons/:id',
        exact: true,
        component: PersonsDetail,
      },
    ],
  },
];
