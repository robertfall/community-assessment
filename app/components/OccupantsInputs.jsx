import React, { Component, PropTypes } from 'react';
import TableTextInput from './inputs/TableTextInput';
import TableBooleanCheckbox from './inputs/TableBooleanCheckbox';

export default class OccupantsInputs extends Component {
  static propTypes = {
    occupants: PropTypes.array.isRequired,
  };

  occupants() {
    return this.props.occupants.map((occupant, index) => {
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
      } = occupant;

      return (
        <tr key={index}>
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
    });
  }

  render() {
    const { occupants } = this.props;
    return (
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
            </tr>
          </thead>
          <tbody>
            { this.occupants() }
            <tr>
              <td colSpan={ 26 } className="text-center">
                <a
                  className="btn btn-primary"
                  onClick={() => occupants.addField() }
                >
                  Add a Member
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}
