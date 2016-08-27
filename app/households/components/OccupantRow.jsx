import React, { PropTypes } from 'react';
import TableTextInput from './inputs/TableTextInput';
import TableBooleanCheckbox from './inputs/TableBooleanCheckbox';

const OccupantRow = ({ occupant, index, remove }) => (
  <tr>
    <td>{index + 1}</td>
    <td><TableTextInput name={`${occupant}.surname`} /></td>
    <td><TableTextInput name={`${occupant}.name`} /></td>
    <td><TableTextInput className="squished" name={`${occupant}.gender`} /></td>
    <td><TableTextInput name={`${occupant}.relationHeadOfHoushold`} /></td>
    <td><TableTextInput className="squished" name={`${occupant}.age`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.atHomeDuringDay`} /></td>
    <td><TableTextInput className="squished" name={`${occupant}.mobility`} /></td>
    <td><TableTextInput className="squished" name={`${occupant}.selfCare`} /></td>
    <td><TableTextInput className="squished" name={`${occupant}.usualActivity`} /></td>
    <td><TableTextInput className="squished" name={`${occupant}.painOrDiscomfort`} /></td>
    <td><TableTextInput className="squished" name={`${occupant}.anxietyOrDepression`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.chronicRespiratoryProblems`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.hypertension`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.epilepsy`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.diabetes`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.chronicMedication`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.tbMedication`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.currentCoughing`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.currentNightSweats`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.recentWeightLoss`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.diarrhoea`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.chronicWound`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.disability`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.problemsWithVision`} /></td>
    <td><TableTextInput name={`${occupant}.comments`} /></td>
    <td>
      <a className="btn btn-danger" onClick={remove} >
        Remove
      </a>
    </td>
  </tr>
);

OccupantRow.propTypes = {
  occupant: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default OccupantRow;
