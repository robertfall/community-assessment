import React from 'react';
import BooleanCheckbox from './inputs/BooleanCheckbox';
import TableTextInput from './inputs/TableTextInput';
import TextField from './inputs/TextField';
import { FieldArray } from 'redux-form';

const renderChildren = ({ fields }) => (
  <tbody>
    {
      fields.map((name, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><TableTextInput name={`${name}.surname`} /></td>
          <td><TableTextInput name={`${name}.name`} /></td>
          <td><TableTextInput name={`${name}.dateOfBirth`} /></td>
          <td><TableTextInput name={`${name}.age`} /></td>
          <td><TableTextInput name={`${name}.gender`} /></td>
          <td><TableTextInput name={`${name}.timeBreastfed`} /></td>
          <td><TableTextInput name={`${name}.timeBottlefed`} /></td>
          <td><TableTextInput name={`${name}.ageWeaned`} /></td>
          <td><TableTextInput name={`${name}.immunization`} /></td>
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
          Add a Child
        </a>
      </td>
    </tr>
  </tbody>
);

export default () => (
  <div className="col-md-12" id="nutritionSection">
    <div className="form-group">
      <h3 className="col-md-6">Persons Under 5 Living in the House</h3>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Surname</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Date Of Birth</th>
          <th>Age</th>
          <th>Time Breastfed</th>
          <th>Time Bottlefed</th>
          <th>Age Weaned</th>
          <th>Immunization</th>
          <th></th>
        </tr>
      </thead>
      {/* using children causes issues with react */}
      <FieldArray name="children.childs" component={renderChildren} />
    </table>
    <div className="form-group">
      <BooleanCheckbox
        name="children.diarrhoeaMixture"
        label="Do you know the ingredients of the mixture you give a child with diarrhoea?"
      />
    </div>
    <div className="form-group">
      <TextField
        name="children.diarrhoeaMixtureRecipe"
        label="If yes, please indicate"
        placeholder="Write it as the family say it"
      />
    </div>
  </div>
);
