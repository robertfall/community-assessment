import React, { Component } from 'react';
import PersonalInformation from './PersonalInformation';
import HealthInformation from './HealthInformation';
import HouseInformation from './HouseInformation';

export default class Form extends Component {
  render() {
    return (
      <div className="row">
        <form className="form-horizontal" name="userInputForm" id="userInputForm">
          <PersonalInformation />
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <button type="button" className="btn btn-primary">Save</button>
              &nbsp;
              <button type="button" className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
