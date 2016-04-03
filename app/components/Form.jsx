import React, { Component, PropTypes } from 'react';
import { FormSections } from '../form-model';
import FormNavigationButtons from './FormNavigationButtons';
import { Link } from 'react-router';

export default class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    step: PropTypes.string
  }

  currentStep() {
    return Number.parseInt(this.props.step, 10);
  }

  renderProgress() {
    return (
      <div className="text-center">
        <ul className="nav nav-wizard">
          {
            FormSections.map((section, index) => {
              return (
                <li className={this.currentStep() === index ? 'active' : ''}>
                  <Link to={{ pathname: '/households/new', query: { step: index } }}>
                    {section.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
  render() {
    const section = FormSections[this.currentStep()];
    const FormSection = section.component;
    const fields = this.props.fields[section.key];
    return (
      <div>
        { this.renderProgress() }
        <form
          className="form-horizontal"
          id="userInputForm"
          onSubmit={this.props.handleSubmit}
        >
          <FormSection {...fields} />
          <FormNavigationButtons step={this.currentStep()} />
        </form>
      </div>
    );
  }
}
