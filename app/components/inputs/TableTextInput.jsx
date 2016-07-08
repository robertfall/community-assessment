import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

const realName = (name) => {
  const pathParts = name.split('.');
  return pathParts[pathParts.length - 1];
};
const TableTextInput = (props) => {
  const { name } = props;
  return (
    <Field
      component="input"
      type="text"
      className="form-control"
      id={realName(name)}
      name={realName(name)}
      {...props}
    />
  );
};

TableTextInput.propTypes = {
  name: PropTypes.string.isRequired
};

export default TableTextInput;
