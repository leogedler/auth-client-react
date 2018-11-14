import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

  onSubmit = (formProps) => {
    const { signin, history } = this.props;
    signin(formProps, () => {
      history.push('/feature');
    });
  };

  render(){
    const { handleSubmit, errorMessage } = this.props;
    return ( 
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>

        <div>{errorMessage}</div>

        <button type="submit">Sign In!</button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { errorMessage: auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ 
    form: 'signin'
  })
)(Signin) 