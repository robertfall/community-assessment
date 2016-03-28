import React, { Component, PropTypes } from 'react';
import TextField from './TextField';

export default class MultiTextFieldInputs extends Component {
  static propTypes = {
    binding: PropTypes.array.isRequired,
    header: PropTypes.string.isRequired
  };

  render() {
    const { binding, header } = this.props;
    return (
      <div>
        <div className="col-md-6 col-md-offset-4">
          <h4>{ header }</h4>
        </div>
        {
          binding.map((info, index) => {
            return (
              <div className="form-group" key={ index }>
                <TextField bindings={ info } label={ (index + 1).toString() }/>
              </div>
            );
          })
        }
      </div>
    );
  }
}
