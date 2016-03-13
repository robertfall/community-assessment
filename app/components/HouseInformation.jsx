import React, { Component } from 'react';

export default class PersonalInformation extends Component {
  render() {
    return (
      <div className="col-md-12" id="houseInfo">
        <div className="form-group">
          <h3 className="col-md-6">House Information</h3>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="address">Address</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="address" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="area">Area</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="area" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="directions">Directions</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="directions" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="wallMaterials">Wall Materials</label>
          <div className="col-md-6">
            <select className="form-control" id="wallMaterials">
              <option>Corregated Iron</option>
              <option>Brick</option>
              <option>Wood</option>
              <option>Traditional Materials</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="wallCondition">Wall Condition</label>
          <div className="col-md-6">
            <select className="form-control" id="wallCondition">
              <option>Good</option>
              <option>Needs repair</option>
              <option>Poor</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="roofMaterials">Roof Materials</label>
          <div className="col-md-6">
            <select className="form-control" id="roofMaterials">
              <option>Corregated Iron</option>
              <option>Brick</option>
              <option>Wood</option>
              <option>Traditional Materials</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="waterSource">Source of Water</label>
          <div className="col-md-6">
            <select className="form-control" id="waterSource" name="waterSource">
              <option value="" disabled selected hidden>Select an option</option>
              <option>Tap in House</option>
              <option>Tap in yard</option>
              <option>Communal Tap</option>
              <option>Stream</option>
              <option>Stagnant</option>
              <option>None</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="toilet">Source of Water</label>
          <div className="col-md-6">
            <select className="form-control" id="toilet" name="toilet">
              <option value="" disabled selected hidden>Select an option</option>
              <option>Toilet in House</option>
              <option>Toilet in yard</option>
              <option>Communal Toilet</option>
              <option>None</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="waterPurification">Water purification measures</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="waterPurification" name="waterPurification" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="toinutritionlet"></label>
          <div className="col-md-6">
            <select className="form-control" id="nutrition" name="nutrition">
              <option value="" disabled selected hidden>Select an option</option>
              <option>Household normally eat starch</option>
              <option>Household normally eat dairy</option>
              <option>Household normally vegetables</option>
              <option>Household normally eat fruit</option>
            </select>
          </div>
        </div>
        <h4>What energy does the family use for:</h4>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="cookingEnergy">Cooking</label>
          <div className="col-md-6">
            <select className="form-control" id="cookingEnergy" name="cookingEnergy">
              <option value="" disabled selected hidden>Select an option</option>
              <option>Gas</option>
              <option>Paraffin Stove</option>
              <option>Electricity</option>
              <option>Fire</option>
              <option>Coal Stove</option>
              <option>None</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="cookingEnergy">Lighting</label>
          <div className="col-md-6">
            <select className="form-control" id="lightingEnergy" name="lightingEnergy">
              <option value="" disabled selected hidden>Select an option</option>
              <option>Candle light</option>
              <option>Electricity</option>
              <option>Paraffin</option>
              <option>Solar</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="heatingEnergy">Lighting</label>
          <div className="col-md-6">
            <select className="form-control" id="heatingEnergy" name="heatingEnergy">
              <option value="" disabled selected hidden>Select an option</option>
              <option>Blannkets</option>
              <option>Coal Stove</option>
              <option>Electricity</option>
              <option>Fire</option>
              <option>Gas</option>
              <option>Paraffin</option>
              <option>None</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="environmentHazards">Hazards in Environment</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="environmentHazards" name="environmentHazards" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="healthInformationNeeded">Health information needed</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="healthInformationNeeded" name="healthInformationNeeded" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="qualityOfLifeImprovement">What would improve your quality of life</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="qualityOfLifeImprovement" name="qualityOfLifeImprovement" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="vtcServices">Number of people that would appreciate VCT services</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="vtcServices" name="vtcServices" />
          </div>
        </div>
      </div>
    );
  }
}
