import React, { Component } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';

class StudentDashboard extends Component{
    render(){
        return (
            <div>
                <Header name={'Student DashBoard'} />
                <Footer />
            </div>
        )
    }

}

export default StudentDashboard;