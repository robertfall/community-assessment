import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';

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
        <div key={index}>
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <h4> Member { index + 1 }</h4>
            </div>
          </div>

          <div className="form-group"><TextField bindings={ surname } /></div>
          <div className="form-group"><TextField bindings={ name } /></div>
          <div className="form-group"><TextField bindings={ gender } /></div>
          <div className="form-group"><TextField bindings={ causeOfDeath } /></div>
          <div className="form-group"><TextField bindings={ age } /></div>
          <div className="form-group"><TextField bindings={ comments } /></div>
          <div className="col-md-6 col-md-offset-4">
            <a
              className="btn btn-danger"
              onClick={() => deaths.removeField(index) }
            >
              Remove this Member
            </a>
          </div>

        </div>
      );
    });
  }

  render() {
    const { deaths } = this.props;

    return (
      <div className="col-md-12" id="nutritionSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4"> Household Members That Passed Away In The Last 12 Months </h3>
        </div>
        <div className="col-md-6 col-md-offset-4">
          <a
            className="btn btn-primary"
            onClick={() => deaths.addField() }
          >
            Add a Member
          </a>
        </div>
        { this.deaths() }
      </div>
    );
  }
}
