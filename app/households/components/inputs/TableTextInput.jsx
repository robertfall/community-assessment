import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

const TableTextInput = (props) => {
  const { name } = props;
  return (
    <Field
      {...props}
      component="input"
      type="text"
      className={`form-control ${props.className}`}
      id={name}
      name={name}
    />
  );
};

TableTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TableTextInput;
