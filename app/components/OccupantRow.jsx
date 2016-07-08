import React, { PropTypes } from 'react';
import TableTextInput from './inputs/TableTextInput';
import TableBooleanCheckbox from './inputs/TableBooleanCheckbox';

const OccupantRow = ({ occupant, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td><TableTextInput name={`${occupant}.surname`} /></td>
    <td><TableTextInput name={`${occupant}.name`} /></td>
    <td><TableTextInput name={`${occupant}.gender`} /></td>
    <td><TableTextInput name={`${occupant}.relationHeadOfHoushold`} /></td>
    <td><TableTextInput name={`${occupant}.age`} /></td>
    <td><TableBooleanCheckbox name={`${occupant}.atHomeDuringDay`} /></td>
    <td><TableTextInput name={`${occupant}.mobility`} /></td>
    <td><TableTextInput name={`${occupant}.selfCare`} /></td>
    <td><TableTextInput name={`${occupant}.usualActivity`} /></td>
    <td><TableTextInput name={`${occupant}.painOrDiscomfort`} /></td>
    <td><TableTextInput name={`${occupant}.anxietyOrDepression`} /></td>
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
  </tr>
);

OccupantRow.propTypes = {
  occupant: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default OccupantRow;
