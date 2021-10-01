import { renderRoutes } from 'react-router-config';

export const App = ({ route }) => {
  return renderRoutes(route.routes);
};
