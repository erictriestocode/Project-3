import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";


class LandingPage extends Component {
    render() {
      return (
        <div>
            <div className="container">
                <span><img src={require("../../assets/logo.JPG")} alt="ThisforThat logo" className="responsive img-center" /></span>
                <h1 className="header center orange-text">...Time is your commodity </h1>
                <div className="row center">
                    <h5 className="header col s12 light">A fun timekeeping app enabling users to digitally send / guarantee their
            time. Users can trade their time as a commodity.</h5>
                </div>
                <div className="row center">
                    <Link to='/home'>
                    <a href="#" id="button" className="btn-large waves-effect waves-light orange">Let's Get Started</a>
                    </Link>
                </div>
                <br /><br />
            </div>
            <div className="row">
            <div className="col s12 m4">
                <div className="icon-block">
                    <h2 className="center light-blue-text">
                        <i className="material-icons">lightbulb_outline</i>
                    </h2>
                    <h5 className="center">Learn</h5>

                    <p className="light">
                        ThisforThat is here to help users grow & develop desired skills by trading their time to help others.
                </p>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="icon-block">
                    <h2 className="center light-blue-text">
                        <i className="material-icons">group</i>
                    </h2>
                    <h5 className="center">Grow</h5>

                    <p className="light">
                        Grow your network and meet new talented friends with ThisforThat.
                </p>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="icon-block">
                    <h2 className="center light-blue-text">
                        <i className="material-icons" color="orange">swap_vertical_circle
                  </i>
                    </h2>
                    <h5 className="center">Trade</h5>

                    <p className="light">
                        Learn the art of trading & learn valuable life skills </p>
                </div>
            </div>
            
        </div>
        
        </div>
    )
}
}

export default LandingPage