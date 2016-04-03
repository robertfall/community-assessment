import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class FormNavigationButtons extends Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
  };

  render() {
    const { step } = this.props;

    return (
      <div className="form-group">
        <Link
          to={{ pathname: '/households/new', query: { step: step - 1 } } }
          className="btn btn-default"
        >
          Back
        </Link>
        &nbsp;
        <Link
          to={{ pathname: '/households/new', query: { step: step + 1 } } }
          className="btn btn-default"
        >
          Next
        </Link>
      </div>
    );
  }
}
