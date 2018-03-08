/**
 *
 * UserPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { REQUEST_USERS } from './constants';

export class UserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    console.log('CDM', this.props);
    this.props.getUsers();
  }

  // userMap(users) {
  //   console.log('usermap', users[0].name);
  //   return users.map((user) => <li key={user.id}> {user.name} </li>);
  // }

  render() {
    const { users } = this.props.userpage;
    console.log('-------', users, this.props);

    return (
      <div>
        <h1>All users</h1>
        <ul>
          {/* {this.userMap(users)} */}
          {users.map((user) => <li key={user.id}> {user.name} </li>)}
        </ul>
      </div>
    );
  }
}

UserPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  users: PropTypes.array,
  userpage: PropTypes.object,
  getUsers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userpage: makeSelectUserPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {
      dispatch({ type: REQUEST_USERS });
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userPage', reducer });
const withSaga = injectSaga({ key: 'userPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserPage);
