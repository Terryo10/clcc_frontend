import React, { Component } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';

class ChurchDashboard extends Component {
    render() {
        return (
            <div>
                <Header name={'Church DashBoard'} />
                <Footer />
            </div>
        )
    }

}

export default ChurchDashboard;