import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';

export default class HealthInformationInputs extends Component {
  static propTypes = {
    healthInformation: PropTypes.object.isRequired
  };

  render() {
    const { healthInformation } = this.props;

    return (
      <div>
        <div className="col-md-6 col-md-offset-4">
          <h4>Is there any health information that you need?</h4>
          <a
            className="btn btn-primary"
            onClick={() => healthInformation.addField() }
          >
            Add
          </a>
        </div>
        {
          healthInformation.map((info, index) => {
            return (
              <div className="form-group">
                <TextField bindings={ info } label={index + 1}/>
              </div>
            );
          })
        }
      </div>
    );
  }
}
