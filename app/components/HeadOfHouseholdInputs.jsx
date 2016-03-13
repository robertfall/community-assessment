import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';
import RadioButtons from './inputs/RadioButtons';
import BooleanCheckbox from './inputs/BooleanCheckbox';

export default class HeadOfHouseholdInputs extends Component {
  static propTypes = {
    name: PropTypes.object.isRequired,
    surname: PropTypes.object.isRequired,
    gender: PropTypes.object.isRequired,
    maritalStatus: PropTypes.object.isRequired,
    dateOfBirth: PropTypes.object.isRequired,
    occupation: PropTypes.object.isRequired,
    age: PropTypes.object.isRequired,
    foreignNational: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
  };

  render() {
    const {
      name,
      surname,
      gender,
      maritalStatus,
      dateOfBirth,
      occupation,
      age,
      foreignNational,
      comment,
    } = this.props;

    return (
      <div className="col-md-12" id="headOfHouseholdSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Identification of Head of Household</h3>
        </div>

        <div className="form-group">
          <TextField bindings={name} />
        </div>

        <div className="form-group">
          <TextField bindings={surname} />
        </div>

        <div className="form-group">
          <RadioButtons bindings={ gender } options={['male', 'female']} />
        </div>

        <div className="form-group">
          <TextField bindings={maritalStatus} />
        </div>

        <div className="form-group">
          <TextField bindings={dateOfBirth} />
        </div>

        <div className="form-group">
          <TextField bindings={age} />
        </div>

        <div className="form-group">
          <BooleanCheckbox bindings={foreignNational} />
        </div>

        <div className="form-group">
          <TextField bindings={occupation} />
        </div>

        <div className="form-group">
          <TextField bindings={comment} />
        </div>
      </div>
    );
  }
}
