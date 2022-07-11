import React, { Component } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';

class ParentDashoboard extends Component{
    render(){
        return (
            <div>
                <Header name={'Parent DashBoard'} />
                <Footer />
            </div>
        )
    }

}

export default ParentDashoboard;