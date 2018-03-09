/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectUsers } from '../App/selectors';
import { REQUEST_USERS } from '../App/constants';
import { getUserShow } from './actions';

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.currentUserId = this.props.location.pathname.split('/')[2];
    console.log(this.currentUserId);
    this.props.onRequestUser(this.currentUserId);
  }

  render() {
    console.log(this.props);
    const userAttributes = this.props.profilepage.userShow;
    console.log(userAttributes);
    return (
      <div>
        <h1>User profile page</h1>
        <h3>{userAttributes.name}</h3>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  onRequestUser: PropTypes.func,
  profilepage: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profilepage: makeSelectProfilePage(),
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestUser: (id) => {
      dispatch(getUserShow(id));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
