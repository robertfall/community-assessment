import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';

export default class AddressInputs extends Component {
  static propTypes = {
    address: PropTypes.object.isRequired,
    area: PropTypes.object.isRequired,
    directions: PropTypes.object.isRequired
  };

  render() {
    const { address, area, directions } = this.props;
    return (
      <div className="col-md-12" id="addressSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Address</h3>
        </div>

        <div className="form-group">
          <TextField bindings={address} />
        </div>

        <div className="form-group">
          <TextField bindings={area} />
        </div>

        <div className="form-group">
          <TextField bindings={directions} />
        </div>
      </div>
    );
  }
}
