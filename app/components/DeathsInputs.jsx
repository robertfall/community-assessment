import React, { Component, PropTypes } from 'react';
import TableTextInput from './inputs/TableTextInput';

export default class DeathsInputs extends Component {
  static propTypes = {
    deaths: PropTypes.array.isRequired,
  };

  deaths() {
    const { deaths } = this.props;
    return deaths.map((death, index) => {
      const {
        surname,
        name,
        gender,
        age,
        causeOfDeath,
        comments,
      } = death;

      return (
        <tr key={index}>
          <td>{ index + 1 }</td>

          <td><TableTextInput bindings={ surname } /></td>
          <td><TableTextInput bindings={ name } /></td>
          <td><TableTextInput bindings={ gender } /></td>
          <td><TableTextInput bindings={ causeOfDeath } /></td>
          <td><TableTextInput bindings={ age } /></td>
          <td><TableTextInput bindings={ comments } /></td>
          <td>
            <a
              className="btn btn-danger"
              onClick={() => deaths.removeField(index) }
            >
              Remove
            </a>
          </td>

        </tr>
      );
    });
  }

  render() {
    const { deaths } = this.props;

    return (
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
          <tbody>
            { this.deaths() }
            <tr>
              <td colSpan={ 11 } className="text-center">
                <a
                  className="btn btn-primary"
                  onClick={() => deaths.addField() }
                >
                  Add a Member
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
