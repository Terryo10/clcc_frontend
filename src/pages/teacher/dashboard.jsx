import React, { Component } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';

class TeacherDashboard extends Component {
    render() {
        return (
            <div>
                <Header name={'Teacher DashBoard'} />
                <Footer />
            </div>
        )
    }

}

export default TeacherDashboard;