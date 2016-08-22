import React from 'react';
import TextField from './inputs/TextField';
import TextArea from './inputs/TextArea';

export default () => (
  <div className="col-md-12" id="addressSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">Address</h3>
    </div>

    <div className="form-group">
      <TextField name="address.address" />
    </div>

    <div className="form-group">
      <TextField name="address.area" />
    </div>

    <div className="form-group">
      <TextArea name="address.directions" />
    </div>
  </div>
);
