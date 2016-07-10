import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

const TableBooleanCheckbox = ({ name }) =>
  <Field component="input" type="checkbox" name={name} />;

TableBooleanCheckbox.propTypes = {
  name: PropTypes.string.isRequired
};

export default TableBooleanCheckbox;
