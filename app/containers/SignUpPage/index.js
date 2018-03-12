/**
 *
 * SignUpPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignUpPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { submitForm } from './actions';

export class SignUpPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log(`A name was submitted: ${this.state.name}`);

    this.setState({ name: '' });
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    const { onSubmit, signuppage } = this.props;
    const { name, email, password } = this.state;
    return (
      <div>
        Enter your name and email address to create an account and start betting
          <input placeholder="name" value={this.state.name} onChange={this.handleName} />
        <br />
        <input type="email" placeholder="email" value={this.state.email} onChange={this.handleEmail} />
        <br />
        <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassword} />
        <br />
        <button type="submit" onClick={() => { onSubmit(name, email, password); }}>
        submit
        </button>
        {!signuppage.requesting && !!signuppage.errors.length && (
        <div>{signuppage.errors}</div>
        )}
        {!signuppage.requesting && !!signuppage.messages.length && (
        <div>{signuppage.messages}</div>
        )}
      </div>
    );
  }
}

SignUpPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signuppage: makeSelectSignUpPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (name, email, password) => {
      console.log('working');
      dispatch(submitForm(name, email, password));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signUpPage', reducer });
const withSaga = injectSaga({ key: 'signUpPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpPage);
