import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  render() {
    return (
      <div className="text-center">
        <h3>Community Assessment Data Capturing</h3>
        <br />
        <Link className="btn btn-primary btn-lg" to="households/new">New Household Form</Link>
        <br />
        <br />
        <Link className="btn btn-primary btn-lg" to="households">Existing Households</Link>
      </div>
    );
  }
}
