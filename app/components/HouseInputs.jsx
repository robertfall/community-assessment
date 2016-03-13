import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';
import RadioButtons from './inputs/RadioButtons';

export default class HouseInputs extends Component {
  static propTypes = {
    wallsMadeOf: PropTypes.object.isRequired,
    wallsCondition: PropTypes.object.isRequired,
    wallsConditionComments: PropTypes.object.isRequired,
    roofMadeOf: PropTypes.object.isRequired,
    roofCondition: PropTypes.object.isRequired,
    roofConditionComments: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
  };

  render() {
    const {
      wallsMadeOf,
      wallsCondition,
      wallsConditionComments,
      roofMadeOf,
      roofCondition,
      roofConditionComments,
      comments,
    } = this.props;

    return (
      <div className="col-md-12" id="headOfHouseholdSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">House</h3>
        </div>

        <div className="form-group">
          <RadioButtons
            bindings={ wallsMadeOf }
            options={[
              'Corrugated Iron',
              'Brick',
              'Traditional Materials',
              'Wood'
            ]}
          />
        </div>

        <div className="form-group">
          <RadioButtons
            bindings={ wallsCondition }
            options={[
              'Good',
              'Needs Repair',
              'Poor',
            ]}
          />
        </div>
        <div className="form-group">
          <TextField placeholder="Walls Comments" label=" " bindings={wallsConditionComments} />
        </div>

        <div className="form-group">
          <RadioButtons
            bindings={ roofMadeOf }
            options={[
              'Corrugated Iron',
              'Brick',
              'Traditional Materials',
              'Wood'
            ]}
          />
        </div>

        <div className="form-group">
          <RadioButtons
            bindings={ roofCondition }
            options={[
              'Good',
              'Needs Repair',
              'Poor',
            ]}
          />
        </div>
        <div className="form-group">
          <TextField placeholder="Roof Comments" label=" " bindings={roofConditionComments} />
        </div>
        <div className="form-group">
          <TextField bindings={comments} label="General Comments"/>
        </div>
      </div>
    );
  }
}
