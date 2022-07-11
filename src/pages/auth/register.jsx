import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../state/actions/auth/auth_action";
import Alert from "../../shared/alert";

class Register extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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

  register = (e) => {
    let loginState = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.password,
    };
    e.preventDefault();
    this.props.register(loginState, this.props.history);
  };
  render() {
    var namelegnth = 3;
    return (<div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
            <div className="text-center px-4"><img className="login-intro-img" src="template/img/bg-img/36.png" alt="" /></div>
            <div className="register-form mt-4 px-4">
              {this.props.shortPassword ? <div>
                <Alert bool={true} message={this.props.loginResponse} />
              </div> : ''}
              <form action="POST" onSubmit={this.register}>
                <div className="form-group text-start mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    required
                    name="name"
                    minLength={namelegnth}
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group text-start mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="hello@example.com"
                    name="email"
                    value={this.state.email}
                    required
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group text-start mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
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
                      Register
                    </button>
                  </div>
                )}
              </form>
            </div>

            <div className="login-meta-data text-center"><Link className="stretched-link forgot-password d-block mt-3 mb-1" to="/fogot_password ">Forgot Password?</Link>
              <p className="mb-0">Already have an account?<Link className="ms-1 stretched-link" to="/login">Sign In</Link></p>
              <p className="mb-0">Browse Without an account ?<Link className="ms-1 stretched-link" to="/">Go Back To home</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>)

  }
}

const mapStateToProps = (state) => {
  return {
    regResponse: state.auth.authResponse,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (creds, history) => dispatch(register(creds, history)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);