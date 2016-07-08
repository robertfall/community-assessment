import React from 'react';
import TextField from './inputs/TextField';
import MultiTextFieldInputs from './inputs/MultiTextFieldInputs';

export default () => (
  <div className="col-md-12" id="nutritionSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">Environment And Health</h3>
    </div>
    <MultiTextFieldInputs
      name="environmentAndHealth.healthInformation"
      header="Is there any health information that you need?"
    />
    <MultiTextFieldInputs
      name="environmentAndHealth.environmentalHazards"
      header="Are there any hazards in the environment that can cause injuries?"
    />
    <MultiTextFieldInputs
      name="environmentAndHealth.lifeImprovements"
      header="What would improve your life the most?"
    />
    <div className="form-group">
      <TextField
        name="environmentAndHealth.peopleWhoWouldAppreciateVCT"
        label="Number of persons that would appreciate VCT services"
      />
    </div>
  </div>
);
