import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../state/actions/auth/auth_action";
import { connect } from "react-redux";
import {resetAuth} from "../../state/actions/auth/auth_action";

class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  login = (e) => {
    let loginState = {
      email: this.state.email,
      password: this.state.password,
    };
    e.preventDefault();
    this.props.login(loginState, this.props.history);
  };

  render() {
    return (
      <div className="vh-100">
        <div className="authincation h-100">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-6">
                <div className="authincation-content">
                  <div className="row no-gutters">
                    <div className="col-xl-12">
                      <div className="auth-form">
                        <div className="text-center mb-3">
                          <a href="index.html">
                            <img src="images/logo-full.png" alt="" />
                          </a>
                        </div>
                        <h4 className="text-center mb-4">
                          Sign in your account
                        </h4>
                        {this.props.error ? 
                        <div className="alert alert-danger alert-dismissible fade show">
                          <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="me-2"
                          >
                            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                          </svg>
                          <strong>Error!</strong> {this.props.loginResponse}
                          <button
                            type="button"
                            className="btn-close"
                           onClick={()=>{
                             this.props.resetAuth()
                           }}
                            aria-label="btn-close"
                          ></button>
                        </div> : ''}
                        <form action="POST" onSubmit={this.login}>
                          <div className="form-group">
                            <label className="mb-1">
                              <strong>Email</strong>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="my@email.com"
                              name="email"
                              value={this.state.email}
                              required
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="mb-1">
                              <strong>Password</strong>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              required
                              value={this.state.password}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="form-row d-flex justify-content-between mt-4 mb-2">
                            <div className="form-group">
                              <div className="form-check custom-checkbox ms-1">
                                <label
                                  className="form-check-label"
                                  htmlFor="basic_checkbox_1"
                                ></label>
                              </div>
                            </div>
                            <div className="form-group">
                              <a href="page-forgot-password.html">
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          {this.props.loading ? (
                            <div className="text-center">
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                disabled
                              >
                                Loading....
                              </button>
                            </div>
                          ) : (
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                              >
                                Sign Me In
                              </button>
                            </div>
                          )}
                        </form>
                        <div className="new-account mt-3">
                          <p>
                            Don't have an account?{" "}
                            <Link className="text-primary" to="/register">
                              Sign up
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state.auth.authResponse,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds, history) => dispatch(login(creds, history)),
    resetAuth: ()=>dispatch(resetAuth())
  };
};  
export default connect(mapStateToProps, mapDispatchToProps)(Login);