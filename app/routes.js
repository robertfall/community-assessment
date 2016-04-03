import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Form from './containers/Form';
import Menu from './components/Menu';


export default (
  <Route path="/" component={App}>
    <Route path="households/new" component={Form}/>
    <IndexRoute component={Menu} />
  </Route>
);
