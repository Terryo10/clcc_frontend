import React, { Component } from 'react';
import { openCloseSideBar } from "../state/actions/sidebar/sidebar_action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../state/actions/auth/auth_action';
class SideNav extends Component {
    state = {}
    logout = (e) => {
        this.props.logout()
        this.props.openCloseSideBar()
    }

    signIn = (e) => {
        this.props.openCloseSideBar()
    }
    render() {
        return (
            <>
                <div className={this.props.showsidebar ? "sidenav-black-overlay active" : "sidenav-black-overlay"}></div>

                <div className={this.props.showsidebar ? "sidenav-wrapper nav-active" : "sidenav-wrapper"} id="sidenavWrapper">

                    <div className="go-back-btn" id="goBack">
                        <svg onClick={() => {
                            this.props.openCloseSideBar()
                        }} className="bi bi-x" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z">
                            </path>
                            <path d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z">
                            </path>
                        </svg>
                    </div>

                    <div className="sidenav-profile">
                        <div className="sidenav-style1"></div>

                        <div className="user-profile"><img src="template/img/bg-img/2.jpg" alt="" /></div>

                        <div className="user-info">
                            <h6 className="user-name mb-0">Tapiwa Tererai</h6><span>Choose Life</span>
                        </div>
                    </div>

                    <ul className="sidenav-nav ps-0">
                        <li><a href="/">
                            <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                                <path d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            </svg>Home</a></li>
                            {this.props.isAuthenticated ? <li><Link to="/dashboard" onClick={()=>{this.signIn()}}> 
                          Dashboard</Link></li>: ""}
                        <li><a href="elements.html">
                            <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-folder2-open" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
                            </svg>Elements<span className="badge bg-danger rounded-pill ms-2">220+</span></a></li>
                        <li><a href="pages.html">
                            <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-collection" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                            </svg>Pages<span className="badge bg-success rounded-pill ms-2">38</span></a></li>
                        <li className="affan-dropdown-menu"><a href="/">
                            <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-cart-check" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>Shop</a>
                            <ul>
                                <li><a href="page-shop-grid.html">- Shop Grid</a></li>
                                <li><a href="page-shop-list.html">- Shop List</a></li>
                                <li><a href="page-shop-details.html">- Shop Details</a></li>
                                <li><a href="page-cart.html">- Cart</a></li>
                                <li><a href="page-checkout.html">- Checkout</a></li>
                            </ul>
                        </li>
                        <li><a href="settings.html">
                            <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                <path
                                    d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                            </svg>Settings</a></li>
                        <li>
                            <div className="night-mode-nav">
                                <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-moon" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z" />
                                </svg>Night Mode<div className="form-check form-switch">
                                    <input className="form-check-input form-check-success" type="checkbox" id="darkSwitch" />
                                </div>
                            </div>
                        </li>
                        {this.props.isAuthenticated ?

                            <li><Link to="" onClick={() => { this.logout()  } }>
                                <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-box-arrow-right" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path
                                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>Logout</Link></li> :

                            <li><Link to="/login" onClick={() => { this.signIn() } }>
                                <svg width="18" height="18" viewBox="0 0 16 16" className="bi bi-box-arrow-right" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path
                                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>Sign In</Link>
                            </li>
                        }
                    </ul>
                    <div className="social-info-wrap"><a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i
                        className="fa fa-facebook"></i></a><a href="/"><i className="fa fa-dribbble"></i></a></div>

                    <div className="copyright-info">
                        <p>&copy; 2022 All rights reserved by<a href="https://designave.co.zw">DesignAve</a></p>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showsidebar: state.sidebar.show_sidebar,
        isAuthenticated: state.auth.isAuthenticated
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openCloseSideBar: () => dispatch(openCloseSideBar()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);