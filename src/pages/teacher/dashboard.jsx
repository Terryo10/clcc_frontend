import React, { Component } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';

class TeacherDashboard extends Component {
    render() {
        return (
            <div>
                <Header name={'Teacher DashBoard'} />
                <div className="page-content-wrapper py-3">
                    <div className="container">
                        <div className="elements-heading d-flex align-items-center mb-3">
                            <div className="icon-wrapper"><svg width="24" height="24" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            </div>
                            <div className="heading-text">
                                <h5 className="mb-0">Welcome to Teacher & Student  Management Dashboard</h5><span>Modern &amp; elegant header, footer &amp; sidebar.</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <a className="page--item" href="element-header-menu.html">Manage Home Works</a>
                                <a className="page--item" href="element-footer-menu.html">Online Lessons</a>
                                <a className="page--item" href="element-sidebar-left-menu.html">Reports</a>
                                <a className="page--item" href="element-sidebar-right-menu.html">Student Chat</a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <div className="card image-gallery-card">
                            <div className="card-body">
                                <h5>My Performance</h5>
                                <div className="skill-progress-bar d-flex align-items-center">
                                    <div className="skill-icon shadow-sm p-2"><svg width="24" height="24" viewBox="0 0 16 16" className="bi bi-code text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                    </svg>
                                    </div>
                                    <div className="skill-data">

                                        <div className="skill-name d-flex align-items-center justify-content-between">
                                            <p className="mb-1">Class Attendence</p><small className="mb-1"><span className="counter">78</span>%</small>
                                        </div>

                                        <div className="progress" style={{ height: 4 }}>
                                            <div className="progress-bar" style={{ width: 78  + '%'}} role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skill-progress-bar d-flex align-items-center">

                                    <div className="skill-icon shadow-sm p-2"><svg width="20" height="20" viewBox="0 0 16 16" className="bi bi-heart text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                    </div>
                                    <div className="skill-data">

                                        <div className="skill-name d-flex align-items-center justify-content-between">
                                            <p className="mb-1">Innovations</p><small className="mb-1"><span className="counter">96</span>%</small>
                                        </div>

                                        <div className="progress" style={{ height: 4 }}>
                                            <div className="progress-bar bg-success" style={{ width: 96 + '%'}} role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skill-progress-bar d-flex align-items-center">

                                    <div className="skill-icon shadow-sm p-2"><svg width="24" height="24" viewBox="0 0 16 16" className="bi bi-bootstrap text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z" />
                                        <path fillRule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" />
                                    </svg>
                                    </div>
                                    <div className="skill-data">

                                        <div className="skill-name d-flex align-items-center justify-content-between">
                                            <p className="mb-1">Student Teacher Engagement</p><small className="mb-1"><span className="counter">88</span>%</small>
                                        </div>

                                        <div className="progress" style={{ height: 4 }}>
                                            <div className="progress-bar bg-info" style={{ width: 88  + '%' }} role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                <div className="row">
                                    <div className="col-4">

                                        <div className="single-counter-wrap text-center mb-4"><svg width="32" height="32" viewBox="0 0 16 16" className="bi bi-basket mb-2 text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                            <h3 className="mb-0 text-success"><span className="counter">1400</span>+</h3>
                                        </div>
                                    </div>
                                    <div className="col-4">

                                        <div className="single-counter-wrap text-center mb-4"><svg width="32" height="32" viewBox="0 0 16 16" className="bi bi-cup mb-2 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z" />
                                        </svg>
                                            <h3 className="mb-0 text-primary"><span className="counter">16</span>k</h3>
                                        </div>
                                    </div>
                                    <div className="col-4">

                                        <div className="single-counter-wrap text-center mb-4"><svg width="32" height="32" viewBox="0 0 16 16" className="bi bi-emoji-smile mb-2 text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                            <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                        </svg>
                                            <h3 className="mb-0 text-danger"><span className="counter">963</span>+</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa repellendus voluptatem quod. Minus laudantium voluptatem asperiores! Itaque suscipit eos aliquid.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}

export default TeacherDashboard;