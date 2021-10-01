import { renderRoutes } from 'react-router-config';
import './App.scss';

export const App = ({ route }) => {
  return renderRoutes(route.routes);
};
