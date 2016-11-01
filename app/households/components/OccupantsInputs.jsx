import React from 'react';
import OccupantRow from './OccupantRow';
import { FieldArray } from 'redux-form';

const renderOccupants = ({ fields }) => (
  <div>
    {
      fields.map((occupant, index) => (
        <OccupantRow
          key={index}
          occupant={occupant}
          index={index}
          remove={() => fields.remove(index)}
        />
      ))
    }
    <div className="row">
      <div className="col-md-12 text-center">
        <a
          className="btn btn-primary"
          onClick={() => fields.push({})}
        >
          Add a Member
        </a>
      </div>
    </div>
  </div>
);

export default () => (
  <div className="col-md-12" id="nutritionSection">
    <div className="row">
      <h3 className="col-md-6">
        Persons Living In the House with Patient
      </h3>
    </div>
    <FieldArray name="occupants.occupants" component={renderOccupants} />
  </div>
);
