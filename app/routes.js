import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'shared/components/App';
import Menu from 'shared/components/Menu';
import NotFoundPage from 'shared/components/NotFoundPage';
import households from 'households';

const { Form, Index, Delete } = households.components;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Menu} />
    <Route path="households/:id/delete" component={Delete} />
    <Route path="households/:id" component={Form} />
    <Route path="households" component={Index} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
