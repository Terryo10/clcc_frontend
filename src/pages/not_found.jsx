import { Component } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

class NotFound extends Component {
    render() {
        return (
            <div className="page-content-wrapper py-3">
                <Header name={'Not Found'} />
                <div className="container">
                    <div className="card">
                        <div className="card-body px-5 text-center"><img className="mb-4" src="template/img/bg-img/39.png" alt="" />
                            <h4>OOPS... <br /> Page not found!</h4>
                            <p className="mb-4">We couldn't find any results for your search. Try again.</p><a className="btn btn-creative btn-danger" href="/">Go to Home</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NotFound;