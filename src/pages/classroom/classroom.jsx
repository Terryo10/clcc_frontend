import React, { Component } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import './Classroom.css';
import { io } from "socket.io-client";

class ClassRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMedia: false,
            otherUserId: null,
            socket:io('http://localhost:3000'),
        };
    }

    hitendpont= () =>{
        console.log('hitendpont');
        this.state.socket.emit('message', {
            name : 'endpoint pamhata',
        })

    }

    startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            const vids = document.querySelectorAll('#main_video');
            vids.forEach(vid => {
                vid.srcObject = stream;

            })
        });
    }

    componentWillMount() {
        this.startVideo();
    }

    render() {
        return (
            <div>
                <Header name={'ClassRoom'} />
                <div className="page-content-wrapper py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="main_video_wrapper ">
                                    <video src={null} id="main_video" autoPlay playsInline muted width={'100%'}></video>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={()=>{this.hitendpont()}} className="btn btn-success mr-1">Mute</button>
                                        <div className="space"></div>
                                        <button className="btn btn-success">Hide Video</button>
                                        <div className="space"></div>
                                        <button className="btn btn-danger">End Call</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <video src={null} id="main_video" className="other_video" autoPlay playsInline muted ></video>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

}

export default ClassRoom;