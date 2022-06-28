import React from 'react'
import SideNav from './side_nav';

function Header() {
    return (
        <div>

            <div className="header-area" id="headerArea">
                <div className="container">

                    <div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">

                        <div className="back-button"><a href="pages.html"><svg width="32" height="32" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg></a></div>

                        <div className="page-heading">
                            <h6 className="mb-0">Order Confirmed</h6>
                        </div>

                        <div class="navbar--toggler" id="affanNavbarToggler"><span class="d-block"></span><span class="d-block"></span><span class="d-block"></span></div>
                    </div>
                </div>
            </div>
            <SideNav/>
        </div>
        
    )
}
export default Header;
