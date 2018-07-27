import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterPage from './RegisterPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { validateInput } from '../actions';
import {bindActionCreators} from 'redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            clickedRegister: false,
        }
    }

    static propTypes = {
        validateInput: PropTypes.func,
    }

    static defaultProps = {
        validateInput: () => {},
    }

    onChangeUserName = (e) => {;
        this.setState({ username: e.target.value });
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    clickedRegister = (e) => {
        this.setState({ clickedRegister: true });
    }

    login = () => {
        this.props.validateInput(this.state.username, this.state.password)
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
              <div><button type="button" onClick={this.login}>Login</button></div>
             </form>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateInput : bindActionCreators(validateInput, dispatch),
    }
  }

  export default connect(null,
    mapDispatchToProps
  )(LoginPage);