import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../state/actions/auth/auth_action";
import { connect } from "react-redux";
import { resetAuth } from "../../state/actions/auth/auth_action";
import Alert from "../../shared/alert";



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
    console.log(this.props)
    this.props.login(loginState, this.props.history);
  };

  render() {
    return (
      <div className="login-wrapper d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <div className="text-center px-4"><img className="login-intro-img" src="template/img/bg-img/36.png" alt="" /></div>
              <div className="register-form mt-4 px-4">
                {this.props.shortPassword ? <div>
                  <Alert bool={true} message={this.props.loginResponse} />
                </div> : ''}
                <form action="POST" onSubmit={this.login}>
                  <div className="form-group text-start mb-3">
                    <input className="form-control"
                      type="text"
                      placeholder="Username or email address"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group text-start mb-3">
                    <input className="form-control"
                      type="password"
                      placeholder="Enter Password" name="password"
                      required
                      value={this.state.password}
                      onChange={this.handleInputChange} />
                  </div>
                  {this.props.loading ? (
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-primary w-100"
                        disabled
                      >
                        Loading....
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                      >
                        Sign Me In
                      </button>
                    </div>
                  )}
                </form>
              </div>

              <div className="login-meta-data text-center"><Link className="stretched-link forgot-password d-block mt-3 mb-1" to="/fogot_password ">Forgot Password?</Link>
                <p className="mb-0">Didn't have an account?<Link className="ms-1 stretched-link" to="/register">Register Now</Link></p>
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
    shortPassword: state.auth.shortPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds, history) => dispatch(login(creds, history)),
    resetAuth: () => dispatch(resetAuth())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);