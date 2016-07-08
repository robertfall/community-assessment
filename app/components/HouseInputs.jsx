import React from 'react';
import TextField from './inputs/TextField';
import RadioButtons from './inputs/RadioButtons';

export default () => (
  <div className="col-md-12" id="houseSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">House</h3>
    </div>

    <div className="form-group">
      <RadioButtons
        name="house.wallsMadeOf"
        includeOther
        options={[
          'Corrugated Iron',
          'Brick',
          'Traditional Materials',
          'Wood'
        ]}
      />
    </div>

    <div className="form-group">
      <RadioButtons
        name="house.wallsCondition"
        options={[
          'Good',
          'Needs Repair',
          'Poor',
        ]}
      />
    </div>
    <div className="form-group">
      <TextField
        placeholder="Walls Comments"
        label=" "
        name="house.wallsConditionComments"
      />
    </div>

    <div className="form-group">
      <RadioButtons
        name="house.roofMadeOf"
        includeOther
        options={[
          'Corrugated Iron',
          'Brick',
          'Traditional Materials',
          'Wood'
        ]}
      />
    </div>

    <div className="form-group">
      <RadioButtons
        name="house.roofCondition"
        options={[
          'Good',
          'Needs Repair',
          'Poor',
        ]}
      />
    </div>
    <div className="form-group">
      <TextField
        placeholder="Roof Comments"
        label=" "
        name="house.roofConditionComments"
      />
    </div>
    <div className="form-group">
      <TextField
        name="house.comments"
        label="General Comments"
      />
    </div>
  </div>
);
