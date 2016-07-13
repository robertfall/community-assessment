import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { selectPage } from '../state';

const Index = ({ households }) => (
  <div>
    <h1>Existing Households</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <td></td>
          <td>Address</td>
          <td>Careworker</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
          households.map((household) => (
            <tr key={household.id}>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/households/${household.id}`} >
                  Edit
                </Link>
              </td>
              <td>{household.address && household.address.address}</td>
              <td>{household.careWorker && household.careWorker.nameAndSurname}</td>
              <td></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

Index.propTypes = {
  households: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  const page = ownProps.location.query.page || 1;
  return {
    households: selectPage(state, page, 10),
  };
}


export default connect(mapStateToProps)(Index);