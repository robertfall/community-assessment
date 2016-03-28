import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';
import HealthInformationInputs from './HealthInformationInputs.jsx';

export default class EnvironmentAndHealthInputs extends Component {
  static propTypes = {
    environmentalHazards: PropTypes.object.isRequired,
    healthInformation: PropTypes.object.isRequired,
    lifeImprovements: PropTypes.object.isRequired,
    peopleWhoWouldAppreciateVCT: PropTypes.object.isRequired,
  };

  render() {
    const { peopleWhoWouldAppreciateVCT, healthInformation } = this.props;

    return (
      <div className="col-md-12" id="nutritionSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Environment And Health</h3>
        </div>
        <HealthInformationInputs healthInformation={healthInformation} />
        <div className="form-group">
          <TextField
            bindings={ peopleWhoWouldAppreciateVCT }
            label="Number of persons that would appreciate VCT services"
          />
        </div>
      </div>
    );
  }
}
