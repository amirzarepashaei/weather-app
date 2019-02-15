import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Form extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div className="App" id="mainForm">
                    <div className="wrapper">
                        <div className="main">
                            <div className="container containerMargin">
                                <div className="row my-auto">
                                    <div className="col-sm-6 offset-sm-3 text-center">
                                        <form action="/forecast" onSubmit={this.props.getWeather} id="form" className="form-container">
                                            <div className="inputCity">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    placeholder="City"
                                                    id="inputCity"
                                                    // value={this.props.city}
                                                />
                                                <IconButton className="iconButton" id="searchButton" aria-label="Search" type="submit">
                                                    <SearchIcon />
                                                </IconButton>
                                            </div>
                                            <span id="cp">
                                                <p>or</p>
                                            <p>use my <button id="btn_cp" onSubmit={this.props.getWeather}>current position</button></p>
                                            </span>
                                        </form >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
     }
}

export default Form;