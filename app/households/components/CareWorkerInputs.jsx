import React from 'react';
import TextField from './inputs/TextField';

export default () => (
  <div className="col-md-12" id="careWorkerSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">Ward-Based Care Worker</h3>
    </div>
    <div className="form-group">
      <TextField name="careWorker.nameAndSurname" label="Name & Surname" />
    </div>
    <div className="form-group">
      <TextField name="careWorker.telephoneNumber" />
    </div>
  </div>
);
