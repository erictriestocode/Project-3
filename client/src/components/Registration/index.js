
import React, { Component } from 'react';
import "./style.css";

class Registration extends Component {
    render() {
        return (
            <div>
                <center>
                    <div class="card-panel white light-2">
                        <div>
                            <form id="register">
                                <div class="card-panel blue darken-4">
                                    <span class="grey-text text-lighten-2" id="appName">
                                        <h1>Register</h1>
                                    </span>
                                    <span class="grey-text text-lighten-2">
                                        <p> Please fill in this form to create an account. </p>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div class="container signin">
                            <p> <a href="/">Already have an account?</a></p>
                        </div>
                        <div class="container">
                            <div class="form-group">
                                <label for="email"><b>Enter your Email:</b></label>
                                <input class="form-control" type="email" placeholder="Enter email" name="email" id="email-input" required></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="firstname"><b>Username</b></label>
                            <input class="form-control" type="text" placeholder="Enter preferred username" name="username" id="firstname-input" required></input>
                        </div>
                        <div class="form-group">
                            <label for="psw"><b>Password</b></label>
                            <input class="form-control" type="password" placeholder="Enter Password" name="psw" id="password-input" required></input>
                        </div>
                        <p>The content and functionality of this website is designed for law-abiding citizens with the intent to
                simplify and quantify law-abiding activities.</p>
                        <p>ThisforThat does not condone the use of its’ proprietary app for transactions based in coercion or
                            manipulation; any criminals in use of app for malice intent will be removed from the community.
                            ThisforThat encourages users to follow the golden rule, “do onto others as you would have them do onto
                you” and is a strong ally to abuse victims.</p>
                        <p>By clicking the ‘I Agree’ button below, you designate that you will not host, harbor or pursue criminal
                activities via ThisforThat and will be an ally to those who are bullied. </p>
                        <form action="#">
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>I Agree</span>
                                </label>
                            </p>

                            <div class="container signin">
                                <p><a href="https://www.stopbullying.gov/">I prefer to stay a bully</a></p>
                            </div>
                        </form>
                    </div>
                </center>
            </div>
        )
    }
}
export default Registration