
import React, { Component } from 'react';
// import "./style.css";

class Transaction extends Component {
    render() {
        return (
            <div>
                <div class="container">

                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <p class="cool-font">Transaction_Desc</p>
                            <input class="form-control" type="text" id="Transaction_Desc" placeholder="Enter Your Transaction_Desc"></input>
                            <br />
                            <p class="cool-font">Tokens_Transaction_amount</p>
                            <input class="form-control" rows="3" id="Tokens_Transaction_amount" placeholder="Each Token equals 15 Minutes"></input>
                            <br />
                            <p class="cool-font">User User_Name_requesting_service</p>
                            <input class="form-control" rows="3" id="User_Name_requesting_service" placeholder="Enter your User Name"></input>

                            <br />
                            <p class="cool-font">User_Name_Providing_service</p>
                            <input class="form-control" rows="3" id="User_Name_Providing_service" placeholder="Enter Friend User Name"></input>
                            <br />
                            <p class="cool-font">TotalTokensBalance</p>
                            <input class="form-control" rows="3" id="TotalTokensBalance" placeholder="Total Tokens Balance"></input>

                            <button id="transreques-submit" class="btn btn-lg pull-right" href="profile.html">Submit!</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <h2>Testing</h2>
                            <hr />
                                <div id="test-area"></div>
</div>
                        </div>

                    </div>
                </div>
                )
            }
        }
export default Transaction