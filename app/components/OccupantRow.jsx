import React, { Component, PropTypes } from 'react';
import TableTextInput from './inputs/TableTextInput';
import TableBooleanCheckbox from './inputs/TableBooleanCheckbox';
import shallowCompare from 'react-addons-shallow-compare';

export default class OccupantRow extends Component {
  static propTypes = {
    occupants: PropTypes.array.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      surname,
      name,
      gender,
      relationHeadOfHoushold,
      age,
      atHomeDuringDay,
      mobility,
      selfCare,
      usualActivity,
      painOrDiscomfort,
      anxietyOrDepression,
      chronicRespiratoryProblems,
      hypertension,
      epilepsy,
      diabetes,
      chronicMedication,
      tbMedication,
      currentCoughing,
      currentNightSweats,
      recentWeightLoss,
      diarrhoea,
      chronicWound,
      disability,
      problemsWithVision,
      comments,
      index
    } = this.props;
    return (
      <tr>
        <td>{ index + 1 }</td>
        <td><TableTextInput bindings={ surname } /></td>
        <td><TableTextInput bindings={ name } /></td>
        <td><TableTextInput bindings={ gender } /></td>
        <td><TableTextInput bindings={ relationHeadOfHoushold } /></td>
        <td><TableTextInput bindings={ age } /></td>
        <td><TableBooleanCheckbox bindings={ atHomeDuringDay } /></td>
        <td><TableTextInput bindings={ mobility } /></td>
        <td><TableTextInput bindings={ selfCare } /></td>
        <td><TableTextInput bindings={ usualActivity } /></td>
        <td><TableTextInput bindings={ painOrDiscomfort } /></td>
        <td><TableTextInput bindings={ anxietyOrDepression } /></td>
        <td><TableBooleanCheckbox bindings={ chronicRespiratoryProblems } /></td>
        <td><TableBooleanCheckbox bindings={ hypertension } /></td>
        <td><TableBooleanCheckbox bindings={ epilepsy } /></td>
        <td><TableBooleanCheckbox bindings={ diabetes } /></td>
        <td><TableBooleanCheckbox bindings={ chronicMedication } /></td>
        <td><TableBooleanCheckbox bindings={ tbMedication } /></td>
        <td><TableBooleanCheckbox bindings={ currentCoughing } /></td>
        <td><TableBooleanCheckbox bindings={ currentNightSweats } /></td>
        <td><TableBooleanCheckbox bindings={ recentWeightLoss } /></td>
        <td><TableBooleanCheckbox bindings={ diarrhoea } /></td>
        <td><TableBooleanCheckbox bindings={ chronicWound } /></td>
        <td><TableBooleanCheckbox bindings={ disability } /></td>
        <td><TableBooleanCheckbox bindings={ problemsWithVision } /></td>
        <td><TableTextInput bindings={ comments } /></td>
      </tr>
    );
  }
}

