import React, { Component, PropTypes } from 'react';
import PersonalInformation from './PersonalInformation';
import AddressInputs from './AddressInputs';
import CareWorkerInputs from './CareWorkerInputs';
import HealthInformation from './HealthInformation';
import HouseInformation from './HouseInformation';

export default class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  render() {
    const { fields: { address, careWorker } } = this.props;
    return (
      <div className="row">
        <form className="form-horizontal" name="userInputForm" id="userInputForm">
          <AddressInputs {...address}/>
          <CareWorkerInputs {...careWorker}/>
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
