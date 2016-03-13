import React, { Component, PropTypes } from 'react';

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
          <h3 className="col-md-6">Address</h3>
        </div>

        <div className="form-group">
          <label
            htmlFor="address"
            className="col-md-4 control-label"
          >
            Address
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              {...address}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="area" className="col-md-4 control-label">Area</label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="area"
              name="area"
              { ...area }
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="directions" className="col-md-4 control-label">Directions</label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="directions"
              name="directions"
              { ...directions }
            />
          </div>
        </div>
      </div>
    );
  }
}
