import React, { Component } from 'react';

export default class PersonalInformation extends Component {
  render() {
    return (
      <div className="col-md-12" id="healthInfo">
        <div className="form-group">
          <h3 className="col-md-6">Health Information</h3>
        </div>
        <div className="form-group">
          <label htmlFor="mobility" className="col-md-4 control-label">Level of Mobility</label>
          <div className="col-md-6">
            <select className="form-control" id="mobility" name="mobility">
              <option value="" disabled selected hidden>Select an option</option>
              <option value="1">I have no trouble walking</option>
              <option value="2">I have some trouble walking</option>
              <option value="3">I am confined to bed</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="selfCare" className="col-md-4 control-label">Self-Care</label>
          <div className="col-md-6">
            <select className="form-control" id="selfCare" name="selfCare">
              <option value="" disabled selected hidden>Select an option</option>
              <option value="1">I have no trouble taking care of myself</option>
              <option value="2">I have some trouble taking care of myself</option>
              <option value="3">I am unable to wash or dress myself</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="usuakActivity" className="col-md-4 control-label">Usual Activity</label>
          <div className="col-md-6">
            <select className="form-control" id="usuakActivity" name="usuakActivity">
              <option value="" disabled selected hidden>Select an option</option>
              <option value="1">I have no problems performing my usual activities</option>
              <option value="2">I have some problems performing my usual activities</option>
              <option value="3">I am unable to perform my usual activities</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="painDiscomfort" className="col-md-4 control-label">Pain/Discomfort</label>
          <div className="col-md-6">
            <select className="form-control" id="painDiscomfort" name="painDiscomfort">
              <option value="" disabled selected hidden>Select an option</option>
              <option value="1">I have no pain or discomfort</option>
              <option value="2">I have moderate pain or discomfort</option>
              <option value="3">I have extreme pain or discomfort</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="anxietyDepression" className="col-md-4 control-label">Anxiety/Depression</label>
          <div className="col-md-6">
            <select className="form-control" id="anxietyDepression" name="anxietyDepression">
              <option value="" disabled selected hidden>Select an option</option>
              <option value="1">I am not anxious or depressed</option>
              <option value="2">I am moderately anxious or depressed</option>
              <option value="3">I am extremely anxious or depressed</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="chronicRespiratoryProblems" className="col-md-4 control-label">Chronic respiratory problems</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="chronicRespiratoryProblems" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="chronicRespiratoryProblems" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="hypertension" className="col-md-4 control-label">Hypertension</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="hypertension" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="hypertension" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="epilepsy" className="col-md-4 control-label">Epilepsy</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="epilepsy" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="epilepsy" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="diabetes" className="col-md-4 control-label">Diabetes</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="diabetes" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="diabetes" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="chronicMedication" className="col-md-4 control-label">Chronic Medication</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="chronicMedication" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="chronicMedication" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="tbMedication" className="col-md-4 control-label">TB Medication</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="tbMedication" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="tbMedication" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="currentCoughing" className="col-md-4 control-label">Current Coughing</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="currentCoughing" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="currentCoughing" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="currentNightSweats" className="col-md-4 control-label">Current Night Sweats</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="currentNightSweats" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="currentNightSweats" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="recentWeightLoss" className="col-md-4 control-label">Recent Weight Loss</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="recentWeightLoss" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="recentWeightLoss" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="diarrhea" className="col-md-4 control-label">Diarrhea in the last 6 months</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="diarrhea" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="diarrhea" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="chronicWounds" className="col-md-4 control-label">Chronic Wounds</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="chronicWounds" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="chronicWounds" value="No" />No
            </label>
          </div>
        </div>
      </div>
    );
  }
}
