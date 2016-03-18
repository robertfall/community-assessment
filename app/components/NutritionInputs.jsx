import React, { Component, PropTypes } from 'react';
import TextField from './inputs/TextField';
import RadioButtons from './inputs/RadioButtons';
import CheckBoxes from './inputs/CheckBoxes';

export default class NutritionInputs extends Component {
  static propTypes = {
    food: PropTypes.object.isRequired,
    foodComments: PropTypes.object.isRequired,
    cookingEnergy: PropTypes.object.isRequired,
    cookingComments: PropTypes.object.isRequired,
    heatingEnergy: PropTypes.object.isRequired,
    heatingComments: PropTypes.object.isRequired,
    lightingEnergy: PropTypes.object.isRequired,
    lightingComments: PropTypes.object.isRequired,
  };

  render() {
    const {
      food,
      foodComments,
      cookingEnergy,
      cookingComments,
      heatingEnergy,
      heatingComments,
      lightingEnergy,
      lightingComments,
    } = this.props;

    return (
      <div className="col-md-12" id="nutritionSection">
        <div className="form-group">
          <h3 className="col-md-6 col-md-offset-4">Nutrition</h3>
        </div>

        <div className="form-group">
          <CheckBoxes
            bindings={ food }
            label="What do the household members usually eat"
            includeOther
            options={[
              'Starch',
              'Dairy',
              'Vegetables',
              'Fruit',
            ]}
          />
        </div>

        <div className="form-group">
          <TextField
            bindings={ foodComments }
            placeholder="Food Comments"
            label=" "
          />
        </div>

        <div className="form-group">
          <h4 className="col-md-6 col-md-offset-4">
            What type of energy does the family use for:
          </h4>
        </div>

        <div className="form-group">
          <CheckBoxes
            bindings={ cookingEnergy }
            label="Cooking"
            includeOther
            options={[
              'Gas',
              'Paraffin Stove',
              'Electricity',
              'Fire',
              'Coal Stove',
            ]}
          />
        </div>
        <div className="form-group">
          <TextField
            bindings={ cookingComments }
            placeholder="Cooking Comments"
            label=" "
          />
        </div>

        <div className="form-group">
          <CheckBoxes
            bindings={ heatingEnergy }
            label="Heating"
            options={[
              'Blankets',
              'Coal Stove',
              'Electricity',
              'Fire',
              'Gas',
              'Paraffin',
              'None',
            ]}
          />
        </div>
        <div className="form-group">
          <TextField
            bindings={ heatingComments }
            placeholder="heating Comments"
            label=" "
          />
        </div>

        <div className="form-group">
          <CheckBoxes
            bindings={ lightingEnergy }
            label="Lighting"
            options={[
              'Candle light',
              'Electricity',
              'Paraffin',
              'Solar',
            ]}
          />
        </div>
        <div className="form-group">
          <TextField
            bindings={ lightingComments }
            placeholder="Lighting Comments"
            label=" "
          />
        </div>
      </div>
    );
  }
}
