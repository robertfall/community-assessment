import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

import { selectHousehold } from '../state';
import { deletedHousehold } from 'households/state';


const addressSummary = (address) => [
  _.get(address, 'address'),
  _.get(address, 'area'),
].join(' ');

const row = (
  {
    id,
    address,
    careWorker,
    children,
    editHousehold,
    deleteHousehold,
    headOfHousehold,
    occupants,
    updatedAt,
  },
  index
) => (
  <tr key={index} role="button" onClick={() => editHousehold(id)}>
    <td key="care-worker">{_.get(careWorker, 'nameAndSurname')}</td>
    <td key="headOfHousehold">{_.get(headOfHousehold, 'name')}</td>
    <td key="address">{addressSummary(address)}</td>
    <td key="occupants">{occupants.occupants.length}</td>
    <td key="children">{children.childs.length}</td>
    <td key="updated" className="updated">{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</td>
  </tr>
);

row.propTypes = {
  address: PropTypes.string,
  careWorker: PropTypes.string,
  editHousehold: PropTypes.func.isRequired,
  deleteHousehold: PropTypes.func.isRequired,
  headOfHousehold: PropTypes.string,
  id: PropTypes.string,
  updatedAt: PropTypes.object.isRequired,
  occupants: PropTypes.array,
  children: PropTypes.array,
};

const Delete = ({ household, deleteHousehold }) => (
  <div>
    <h1>Are you sure you want to delete the household?</h1>
    <table className="table table-striped table-sm table-hover">
      <thead>
        <tr>
          <th>Careworker</th>
          <th>Head of Household</th>
          <th>Address</th>
          <th>Occupants</th>
          <th>Children</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        { row(household) }
      </tbody>
    </table>
    <br />
    <div className="text-center">
      <button
        className="btn btn-danger btn-lg"
        onClick={() => deleteHousehold(household)}
      >Delete</button>
      &nbsp;
      <Link className="btn btn-primary btn-lg" to="households">Cancel</Link>
    </div>
  </div>
);

function mapStateToProps(state, ownProps) {
  return {
    household: selectHousehold(state, ownProps.params.id),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteHousehold(household) {
      dispatch(deletedHousehold(household));
      dispatch(push('/households'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
