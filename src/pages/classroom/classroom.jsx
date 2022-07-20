import React, { Component } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';

class ClassRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMedia: false,
            otherUserId: null,
        };

    }

    render() {
        return (
            <div>
                <Header name={'ClassRoom'} />
                <br />
                <br />
                <p className="text-align-center">Teacher Preview here</p>
                <div className="row">
                    <div className="col-md-3">Students Preview here </div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default ClassRoom;