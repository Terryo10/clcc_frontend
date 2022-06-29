import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {register} from "../../state/actions/auth/auth_action";

class Register extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      name:"",
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
      email: this.state.email,
      password: this.state.password,
    };
    e.preventDefault();
    this.props.register(loginState, this.props.history);
  };
  render() {
    var namelegnth = 3;
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
                        <h4 className="text-center mb-4">Sign up your account</h4>
                        <form action="POST" onSubmit={this.register}>
                          <div className="form-group">
                            <label className="mb-1">
                              <strong>Username</strong>
                            </label>
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
                          <div className="form-group">
                            <label className="mb-1">
                              <strong>Email</strong>
                            </label>
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
                          <div className="text-center mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Sign me up
                            </button>
                          </div>
                        </form>
                        <div className="new-account mt-3">
                          <p>
                            Already have an account?{" "}
                            <Link className="text-primary" to="/login">
                              Sign in
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
    regResponse: state.auth.authResponse,
   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (creds, history) => dispatch(register(creds, history)),
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);