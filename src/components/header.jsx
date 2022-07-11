import React, {Component} from 'react';
import SideNav from './side_nav';
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
                            <div className="back-button">
                            </div>
                            <div className="page-heading">
                                <h6 className="mb-0">{this.props.name ?? ''}</h6>
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
