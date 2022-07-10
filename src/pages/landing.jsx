import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
class LandingPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header name={'Welcome'}/>
                <Footer/>
            </div>
        );
    }
}
 
export default LandingPage;