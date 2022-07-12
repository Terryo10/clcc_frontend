import React, { Component } from 'react';
class Slider extends Component {
    state = {}
    render() {
        return (
            <div>
                <div class="owl-carousel-one owl-carousel">

                    <div class="single-hero-slide bg-overlay" style={{ backgroundImage: 'img/bg-img/31.jpg' }}>
                        <div class="slide-content h-100 d-flex align-items-center text-center">
                            <div class="container">
                                <h3 class="text-white" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="500ms">Build with
                                    Bootstrap 5</h3>
                                <p class="text-white mb-4" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="500ms">Build
                                    fast, responsive sites with Bootstrap.</p><a class="btn btn-creative btn-warning" href="/"
                                        data-animation="fadeInUp" data-delay="800ms" data-wow-duration="500ms">Purchase Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="single-hero-slide bg-overlay" style={{ backgroundImage: 'img/bg-img/32.jpg' }}>
                        <div class="slide-content h-100 d-flex align-items-center text-center">
                            <div class="container">
                                <h3 class="text-white" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">PWA Ready
                                </h3>
                                <p class="text-white mb-4" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">Make your
                                    website feel more like an app.</p><a class="btn btn-creative btn-warning" href="/"
                                        data-animation="fadeInUp" data-delay="800ms" data-wow-duration="500ms">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="single-hero-slide bg-overlay" style={{ backgroundImage: 'img/bg-img/33.jpg' }}>
                        <div class="slide-content h-100 d-flex align-items-center text-center">
                            <div class="container">
                                <h3 class="text-white" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Unique
                                    Elements &amp; Pages</h3>
                                <p class="text-white mb-4" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">Create
                                    your website in minutes, not weeks.</p><a class="btn btn-creative btn-warning" href="/"
                                        data-animation="fadeInUp" data-delay="800ms" data-wow-duration="500ms">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;