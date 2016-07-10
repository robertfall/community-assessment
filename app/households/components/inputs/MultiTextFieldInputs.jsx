import React, { PropTypes } from 'react';
import TextField from './TextField';
import { FieldArray } from 'redux-form';

const renderFields = ({ fields }) => (
  <div>
    {
      fields.map((info, index) => (
        <div className="form-group" key={index}>
          <TextField name={info} label={(index + 1).toString()} />
        </div>
      ))
    }
  </div>
);

const MultiTextFieldInputs = ({ header, name }) => (
  <div>
    <div className="col-md-6 col-md-offset-4">
      <h4>{header}</h4>
    </div>
    <FieldArray name={name} component={renderFields} />
  </div>
);

MultiTextFieldInputs.propTypes = {
  header: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MultiTextFieldInputs;
