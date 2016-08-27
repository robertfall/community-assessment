import React from 'react';
import OccupantRow from './OccupantRow';
import { FieldArray } from 'redux-form';

const renderOccupants = ({ fields }) => (
  <tbody>
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
    <tr>
      <td colSpan={27} className="text-center">
        <a
          className="btn btn-primary"
          onClick={() => fields.push({})}
        >
          Add a Member
        </a>
      </td>
    </tr>
  </tbody>
);

export default () => (
  <div className="col-md-12" id="nutritionSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">
        Persons Living In the House with Patient
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Surname</th>
            <th>Name</th>
            <th style={{ width: '30px' }}>Gender</th>
            <th>Relationship to HoH</th>
            <th style={{ width: '30px' }}>Age</th>
            <th className="rotate check">
              <div><span>At Home During Day</span></div>
            </th>
            <th className="rotate text">
              <div><span>Mobility</span></div>
            </th>
            <th className="rotate text">
              <div><span>Self Care</span></div>
            </th>
            <th className="rotate text">
              <div><span>Usual Activity</span></div>
            </th>
            <th className="rotate text">
              <div><span>Pain or Discomfort</span></div>
            </th>
            <th className="rotate text">
              <div><span>Anxiety or Depression</span></div>
            </th>
            <th className="rotate check">
              <div><span>Chronic Respiratory Problems</span></div>
            </th>
            <th className="rotate check">
              <div><span>Hypertension</span></div>
            </th>
            <th className="rotate check">
              <div><span>Epilepsy</span></div>
            </th>
            <th className="rotate check">
              <div><span>Diabetes M</span></div>
            </th>
            <th className="rotate check">
              <div><span>Chronic Medication</span></div>
            </th>
            <th className="rotate check">
              <div><span>TB Medication 2014/15</span></div>
            </th>
            <th className="rotate check">
              <div><span>Current Coughing</span></div>
            </th>
            <th className="rotate check">
              <div><span>Current Night Sweats</span></div>
            </th>
            <th className="rotate check">
              <div><span>Recent Weight Loss</span></div>
            </th>
            <th className="rotate check">
              <div><span>Diarrhoea</span></div>
            </th>
            <th className="rotate check">
              <div><span>Chronic Wound</span></div>
            </th>
            <th className="rotate check">
              <div><span>Disability</span></div>
            </th>
            <th className="rotate check">
              <div><span>Problems With Vision</span></div>
            </th>
            <th>Comments</th>
            <th></th>
          </tr>
        </thead>
        <FieldArray name="occupants.occupants" component={renderOccupants} />
      </table>
    </div>
  </div>
);
