import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';
import MultiTextFieldInputs from './inputs/MultiTextFieldInputs';

export default class EnvironmentAndHealthInputs extends Component {
  static propTypes = {
    environmentalHazards: PropTypes.array.isRequired,
    healthInformation: PropTypes.array.isRequired,
    lifeImprovements: PropTypes.array.isRequired,
    peopleWhoWouldAppreciateVCT: PropTypes.object.isRequired,
  };

  render() {
    const {
      peopleWhoWouldAppreciateVCT,
      healthInformation,
      environmentalHazards,
      lifeImprovements,
    } = this.props;
    return (
      <div className="col-md-12" id="nutritionSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Environment And Health</h3>
        </div>
        <MultiTextFieldInputs
          binding={ healthInformation }
          header="Is there any health information that you need?"
        />
        <MultiTextFieldInputs
          binding={ environmentalHazards }
          header="Are there any hazards in the environment that can cause injuries?"
        />
        <MultiTextFieldInputs
          binding={ lifeImprovements }
          header="What would improve your life the most?"
        />
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
