import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';
import RadioButtons from './inputs/RadioButtons';

export default class WaterAndSanitationInputs extends Component {
  static propTypes = {
    sourceOfWater: PropTypes.object.isRequired,
    toilet: PropTypes.object.isRequired,
    waterPurificationMeasures: PropTypes.object.isRequired,
  };

  render() {
    const {
      sourceOfWater,
      toilet,
      waterPurificationMeasures,
    } = this.props;

    return (
      <div className="col-md-12" id="headOfHouseholdSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Water & Sanitation</h3>
        </div>

        <div className="form-group">
          <RadioButtons
            bindings={ sourceOfWater }
            options={[
              'Tap in House',
              'Tap in Yard',
              'Communal Tap',
              'Stream',
              'Stagnant',
              'None',
            ]}
          />
        </div>

        <div className="form-group">
          <RadioButtons
            bindings={ toilet }
            options={[
              'In the House',
              'In the Yard',
              'Communal Toilet',
              'None',
            ]}
          />
        </div>

        <div className="form-group">
          <TextField bindings={waterPurificationMeasures} />
        </div>
      </div>
    );
  }
}
