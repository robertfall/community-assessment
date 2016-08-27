import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import moment from 'moment';
import { push } from 'react-router-redux';

import { selectPage } from '../state';

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
  headOfHousehold: PropTypes.string,
  id: PropTypes.string,
  updatedAt: PropTypes.object.isRequired,
  occupants: PropTypes.array,
  children: PropTypes.array,
};

const Index = ({ households, editHousehold }) => (
  <div>
    <h1>Existing Households</h1>
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
        {households.map((household, index) => row({ ...household, editHousehold }, index))}
      </tbody>
    </table>
  </div>
);

Index.propTypes = {
  households: PropTypes.array.isRequired,
  editHousehold: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const page = ownProps.location.query.page || 1;
  return {
    households: selectPage(state, page, 10),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editHousehold: (id) => {
      dispatch(push(`/households/${id}`));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
