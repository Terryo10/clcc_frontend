import React, { Component } from 'react';
import Header from '../../components/header';

class Meetings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

   
    render() { 
        return (
            <div >
                <Header name={'Meetings'} />
                
            </div>
        );
    }
}
 
export default Meetings;