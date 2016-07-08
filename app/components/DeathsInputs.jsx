import React from 'react';
import TableTextInput from './inputs/TableTextInput';
import { FieldArray } from 'redux-form';

const renderDeaths = ({ fields }) => (
  <tbody>
    {
      fields.map((death, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><TableTextInput name={`${death}.surname`} /></td>
          <td><TableTextInput name={`${death}.name`} /></td>
          <td><TableTextInput name={`${death}.gender`} /></td>
          <td><TableTextInput name={`${death}.causeOfDeath`} /></td>
          <td><TableTextInput name={`${death}.age`} /></td>
          <td><TableTextInput name={`${death}.comments`} /></td>
          <td>
            <a
              className="btn btn-danger"
              onClick={() => fields.remove(index)}
            >
              Remove
            </a>
          </td>
        </tr>
      ))
    }
    <tr>
      <td colSpan={11} className="text-center">
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
      <h3 className="col-md-12">
        Household Members That Passed Away In The Last 12 Months
      </h3>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Surname</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Cause of Death</th>
          <th>Age</th>
          <th>Comments</th>
          <th></th>
        </tr>
      </thead>
      <FieldArray name="deaths.deaths" component={renderDeaths} />
    </table>
  </div>
);
