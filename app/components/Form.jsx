import React, { Component, PropTypes } from 'react';
import AddressInputs from './AddressInputs';
import CareWorkerInputs from './CareWorkerInputs';
import HeadOfHouseholdInputs from './HeadOfHouseholdInputs';
import HouseInputs from './HouseInputs';
import SanitationAndWaterInputs from './SanitationAndWaterInputs';
import NutritionInputs from './NutritionInputs';
import ChildrenInputs from './ChildrenInputs';
import DeathsInputs from './DeathsInputs';
import EnvironmentAndHealthInputs from './EnvironmentAndHealthInputs';
import OccupantsInputs from './OccupantsInputs';

export default class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func
  }

  render() {
    const {
      fields: {
        address,
        careWorker,
        headOfHousehold,
        house,
        sanitationAndWater,
        nutrition,
        children,
        deaths,
        environmentAndHealth,
        occupants
      }
    } = this.props;

    return (
      <div className="row">
        <h1>New Form</h1>
        <form
          className="form-horizontal"
          id="userInputForm"
          onSubmit={this.props.handleSubmit}
        >
          <AddressInputs {...address}/>
          <CareWorkerInputs {...careWorker}/>
          <HeadOfHouseholdInputs {...headOfHousehold}/>
          <HouseInputs {...house}/>
          <SanitationAndWaterInputs {...sanitationAndWater}/>
          <NutritionInputs {...nutrition}/>
          <ChildrenInputs {...children}/>
          <DeathsInputs deaths={deaths}/>
          <EnvironmentAndHealthInputs {...environmentAndHealth}/>
          <OccupantsInputs occupants={occupants} />
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <button type="submit" className="btn btn-primary">Save</button>
              &nbsp;
              <button type="button" className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
