import React from 'react';
import TextField from './inputs/TextField';
import CheckBoxes from './inputs/CheckBoxes';

export default () => (
  <div className="col-md-12" id="nutritionSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">Nutrition</h3>
    </div>

    <div className="form-group">
      <CheckBoxes
        name="nutrition.food"
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
        name="nutrition.foodComments"
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
        name="nutrition.cookingEnergy"
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
        name="nutrition.cookingComments"
        placeholder="Cooking Comments"
        label=" "
      />
    </div>

    <div className="form-group">
      <CheckBoxes
        name="nutrition.heatingEnergy"
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
        name="nutrition.heatingComments"
        placeholder="heating Comments"
        label=" "
      />
    </div>

    <div className="form-group">
      <CheckBoxes
        name="nutrition.lightingEnergy"
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
        name="nutrition.lightingComments"
        placeholder="Lighting Comments"
        label=" "
      />
    </div>
  </div>
);
