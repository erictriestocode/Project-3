import React, { Component } from 'react';
import "./style.css";

class Help extends Component {
    render() {
        return (
            <div>
                <center>
                    <form id="register">
                        <div class="card-panel blue darken-4">
                            <span class="grey-text text-lighten-2" id="appName">
                                <h1>Something we can help with?</h1>
                            </span>
                        </div>
                    </form>
                    <div class="container">
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix"></i>
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1"></label>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </center>
            </div>

        )
    }
}
export default Help