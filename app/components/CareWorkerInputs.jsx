import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';

export default class CareWorkerInputs extends Component {
  static propTypes = {
    nameAndSurname: PropTypes.object.isRequired,
    telephoneNumber: PropTypes.object.isRequired,
  };

  render() {
    const { nameAndSurname, telephoneNumber } = this.props;
    return (
      <div className="col-md-12" id="careWorkerSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Ward-Based Care Worker</h3>
        </div>
        <div className="form-group">
          <TextField bindings={nameAndSurname} label="Name & Surname" />
        </div>
        <div className="form-group">
          <TextField bindings={telephoneNumber} />
        </div>
      </div>
    );
  }
}
