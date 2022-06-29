import React, {Component} from 'react';
import SideNav from './side_nav';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {openCloseSideBar} from "../state/actions/sidebar/sidebar_action";


class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-area" id="headerArea">
                    <div className="container">
                        <div
                            className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
                            <div className="back-button"><Link to="/">
                                <svg width="32" height="32" viewBox="0 0 16 16" className="bi bi-arrow-left-short"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                </svg>
                            </Link></div>
                            <div className="page-heading">
                                <h6 className="mb-0">page name here</h6>
                            </div>
                            <div className="navbar--toggler" id="affanNavbarToggler" onClick={() => {
                                this.props.openCloseSideBar()
                            }}><span className="d-block"
                            ></span><span
                                className="d-block"></span><span className="d-block"></span></div>
                        </div>
                    </div>
                </div>
                <SideNav/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        showsidebar: state.sidebar.show_sidebar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openCloseSideBar: () => dispatch(openCloseSideBar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
