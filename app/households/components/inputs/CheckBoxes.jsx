import React, { PropTypes } from 'react';
import startCase from 'lodash/startCase';
import chunk from 'lodash/chunk';
import without from 'lodash/without';
import includes from 'lodash/includes';
import { Field } from 'redux-form';

const parse = (option, value, onChange) =>
  ({ target }) => {
    const safeValue = value || [];

    if (includes(safeValue, option)) {
      if (!target.checked) { onChange(without(safeValue, option)); }
    } else {
      if (target.checked) { onChange(safeValue.concat(option)); }
    }
  };


const realName = (name) => name.split('.')[-1];

const children = ({ options, name, includeOther, input }) => {
  const optionsWithOther = includeOther
                         ? options.concat('Other')
                         : options;
  const { onChange, value } = input;

  return chunk(optionsWithOther, 3).map((row, index) => (
    <div key={index}>
      {
        row.map((opt) => (
          <div key={opt} className="col-sm-4">
            <label className="checkbox-inline control-label">
              <input
                type="checkbox"
                name={name}
                onChange={parse(opt, value, onChange)}
                checked={includes(value, opt)}
              />
              {startCase(opt)}
            </label>
          </div>
        ))
      }
    </div>
  ));
};

const CheckBoxes = (props) => {
  const { label, name } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="col-md-4 control-label"
      >
        {label || startCase(realName(name))}
      </label>
      <div className="col-md-6">
        {children(props)}
      </div>
    </div>
  );
};

CheckBoxes.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default (props) => (
  <Field
    component={CheckBoxes}
    {...props}
  />
);
