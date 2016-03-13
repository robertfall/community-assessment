import React, { Component, PropTypes } from 'react';

export default class CareWorkerInputs extends Component {
  static propTypes = {
    nameAndSurname: PropTypes.object.isRequired,
    telephoneNumber: PropTypes.object.isRequired,
  };

  render() {
    const { nameAndSurname, telephoneNumber } = this.props;
    return (
      <div className="col-md-12" id="addressSection">
        <div className="form-group">
          <h3 className="col-md-6">Ward-Based Care Worker</h3>
        </div>

        <div className="form-group">
          <label
            htmlFor="nameAndSurname"
            className="col-md-4 control-label"
          >
            Name & Surname
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="nameAndSurname"
              name="nameAndSurname"
              {...nameAndSurname}
            />
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor="telephoneNumber"
            className="col-md-4 control-label"
          >
            Telephone Number
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="telephoneNumber"
              name="telephoneNumber"
              {...telephoneNumber}
            />
          </div>
        </div>
      </div>
    );
  }
}
