import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { registerInput } from '../actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            email: '',
        }
    }

    static propTypes = {
        registerInput: PropTypes.func,
    }

    static defaultProps = {
        registerInput: () => {},
    }

    onChangeUserName = (e) => {;
        this.setState({ username: e.target.value });
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    register = () => {
        this.props.registerInput(this.state.username, this.state.password, this.state.email)
    }

  render = () => {
    return(
          <div>
            <form>
              <div>
                 <label>Enter your username:</label>
                 <input type="text" value={this.state.username} onChange={this.onChangeUserName} />
              </div>
              <div>
                <label>Enter your password:</label>
                <input type="text" value={this.state.password} onChange={this.onChangePassword} />
              </div>
              <div>
                <label>Enter your Email:</label>
                <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
              </div>
              <div><button type="button" onClick={this.register}>Register</button></div>
             </form>
          </div>
        );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        registerInput : bindActionCreators(registerInput, dispatch),
    }
  }

  export default connect(null,
    mapDispatchToProps
  )(RegisterPage);
