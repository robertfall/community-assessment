import React, { Component } from 'react';

export default class PersonalInformation extends Component {
  render() {
    return (
      <div className="col-md-12" id="personalInfo">
        <div className="form-group">
          <h3 className="col-md-6">Personal Information</h3>
        </div>
        <div className="form-group">
          <label htmlFor="surname" className="col-md-4 control-label">Surname</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="surname" name="surname"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="col-md-4 control-label">Name</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="name" name="name"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="col-md-4 control-label">Gender</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="gender" value="male" />Male
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="gender" value="female" />Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="relationshiptoHoH" className="col-md-4 control-label">Relationship to HoH</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="relationshiptoHoH" name="relationshiptoHoH"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="age" className="col-md-4 control-label">Age</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="age" name="age"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="atHomeDuringTheDay" className="col-md-4 control-label">At home during the day?</label>
          <div className="col-md-6">
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="atHomeDuringTheDay" value="Yes" />Yes
            </label>
            <label className="radio-inline col-md-4 control-label">
              <input type="radio" name="atHomeDuringTheDay" value="No" />No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="careworkerTel">Tel No</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="careworkerTel" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="hohStatus">Marital Status</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="hohStatus" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="hohDOB">Date of Birth</label>
          <div className="col-md-6">
            <input type="text" className="form-control" id="hohDOB" />
          </div>
        </div>
      </div> 
    );
  }
}
