import React, { Component, PropTypes } from 'react';
import startCase from 'lodash/startCase';
import chunk from 'lodash/chunk';

export default class RadioButtons extends Component {
  static propTypes = {
    bindings: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    includeOther: PropTypes.bool
  };

  labelText() {
    return this.props.label
         ? this.props.label
         : startCase(this.realName());
  }

  realName() {
    if (this.props.name) return this.props.name;

    const pathParts = this.props.bindings.name.split('.');
    return pathParts[pathParts.length - 1];
  }

  children() {
    const { options, bindings, includeOther } = this.props;
    const optionsWithOther = includeOther
                           ? options.concat('other')
                           : options;
    return chunk(optionsWithOther, 3).map((row, index) => {
      return (
        <div key={ index }>
        {
          row.map((opt) => {
            return (
              <div key={opt} className="col-sm-4">
                <label className="radio-inline control-label">
                  <input
                    type="radio"
                    {...bindings}
                    value={opt}
                  />
                  {startCase(opt)}
                </label>
              </div>
            );
          })
        }
        </div>
      );
    });
  }


  render() {
    return (
      <div>
        <label
          htmlFor={this.realName()}
          className="col-md-2 col-md-offset-2 control-label"
        >
          {this.labelText()}
        </label>
        <div className="col-md-6">
          { this.children() }
        </div>
      </div>
    );
  }
}
