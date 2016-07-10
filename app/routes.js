import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'shared/components/App';
import Menu from 'shared/components/Menu';
import households from 'households';

const Form = households.components.Form;
console.log(households.components);

export default (
  <Route path="/" component={App}>
    <Route path="households/new" component={Form} />
    <IndexRoute component={Menu} />
  </Route>
);
