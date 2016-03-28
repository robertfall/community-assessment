import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';
import BooleanCheckbox from './inputs/BooleanCheckbox';

export default class ChildrenInputs extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    diarrhoeaMixture: PropTypes.object.isRequired,
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
        <div key={index}>
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <h4> Child { index + 1 }</h4>
            </div>
          </div>

          <div className="form-group"><TextField bindings={ surname } /></div>
          <div className="form-group"><TextField bindings={ name } /></div>
          <div className="form-group"><TextField bindings={ dateOfBirth } /></div>
          <div className="form-group"><TextField bindings={ age } /></div>
          <div className="form-group"><TextField bindings={ gender } /></div>
          <div className="form-group"><TextField bindings={ timeBreastfed } /></div>
          <div className="form-group"><TextField bindings={ timeBottlefed } /></div>
          <div className="form-group"><TextField bindings={ ageWeaned } /></div>
          <div className="form-group"><TextField bindings={ immunization } /></div>
          <div className="col-md-6 col-md-offset-4">
            <a
              className="btn btn-danger"
              onClick={() => children.removeField(index) }
            >
              Remove this Child
            </a>
          </div>

        </div>
      );
    });
  }

  render() {
    const { diarrhoeaMixture, children } = this.props;

    return (
      <div className="col-md-12" id="nutritionSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Persons Under 5 Living in the House</h3>
        </div>
        <div className="col-md-6 col-md-offset-4">
          <a
            className="btn btn-primary"
            onClick={() => children.addField() }
          >
            Add a Child
          </a>
        </div>
        { this.children() }
        <div className="form-group">
          <BooleanCheckbox
            bindings={ diarrhoeaMixture }
            label="Do you know the ingredients of the mixture you give a child with diarrhoea?"
          />
        </div>
      </div>
    );
  }
}
