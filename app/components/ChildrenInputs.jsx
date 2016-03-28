import React, { Component, PropTypes } from 'react';
import BooleanCheckbox from './inputs/BooleanCheckbox';
import TableTextInput from './inputs/TableTextInput';
import TextField from './inputs/TextField';

export default class ChildrenInputs extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    diarrhoeaMixture: PropTypes.object.isRequired,
    diarrhoeaMixtureRecipe: PropTypes.object.isRequired,
  };

  children() {
    const { children } = this.props;
    return children.map((child, index) => {
      const {
        surname,
        name,
        gender,
        dateOfBirth,
        age,
        timeBreastfed,
        timeBottlefed,
        ageWeaned,
        immunization,
      } = child;

      return (
        <tr key={index}>
          <td>{ index + 1 }</td>
          <td><TableTextInput bindings={ surname } /></td>
          <td><TableTextInput bindings={ name } /></td>
          <td><TableTextInput bindings={ dateOfBirth } /></td>
          <td><TableTextInput bindings={ age } /></td>
          <td><TableTextInput bindings={ gender } /></td>
          <td><TableTextInput bindings={ timeBreastfed } /></td>
          <td><TableTextInput bindings={ timeBottlefed } /></td>
          <td><TableTextInput bindings={ ageWeaned } /></td>
          <td><TableTextInput bindings={ immunization } /></td>
          <td>
            <a
              className="btn btn-danger"
              onClick={() => children.removeField(index) }
            >
              Remove
            </a>
          </td>
        </tr>
      );
    });
  }

  render() {
    const {
      diarrhoeaMixture,
      diarrhoeaMixtureRecipe,
      children,
    } = this.props;

    return (
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
          <tbody>
            { this.children() }
            <tr>
              <td colSpan={ 11 } className="text-center">
                <a
                  className="btn btn-primary"
                  onClick={() => children.addField() }
                >
                  Add a Child
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-group">
          <BooleanCheckbox
            bindings={ diarrhoeaMixture }
            label="Do you know the ingredients of the mixture you give a child with diarrhoea?"
          />
        </div>
        <div className="form-group">
          <TextField
            bindings={diarrhoeaMixtureRecipe}
            label="If yes, please indicate"
            placeholder="Write it as the family say it"
          />
        </div>
      </div>
    );
  }
}
