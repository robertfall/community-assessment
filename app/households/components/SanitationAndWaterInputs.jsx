import React from 'react';
import TextField from './inputs/TextField';
import RadioButtons from './inputs/RadioButtons';

export default () => (
  <div className="col-md-12" id="headOfHouseholdSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">Water & Sanitation</h3>
    </div>

    <div className="form-group">
      <RadioButtons
        name="sanitationAndWater.sourceOfWater"
        includeOther
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
        name="sanitationAndWater.toilet"
        includeOther
        options={[
          'In the House',
          'In the Yard',
          'Communal Toilet',
          'None',
        ]}
      />
    </div>

    <div className="form-group">
      <TextField name="sanitationAndWater.waterPurificationMeasures" />
    </div>
  </div>
);
