import { App } from '../App';
import Person from '../Pages/Person';

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Person,
      },
    ],
  },
];
