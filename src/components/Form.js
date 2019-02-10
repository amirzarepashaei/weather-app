import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InputBase from '@material-ui/core/InputBase';

class Form extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div className="App" id="mainForm">
                    <div className="wrapper">
                        <div className="main">
                            <div className="container">
                                <div className="row my-auto">
                                    <div className="col-sm-6 offset-sm-3 text-center">
                                        <form action="/forecast" onSubmit={this.props.getWeather} className="form-container">
                                            <div className="inputCity">
                                                <InputBase
                                                    type="text"
                                                    name="city"
                                                    placeholder="City"
                                                />
                                                <IconButton className="iconButton" aria-label="Search" type="submit">
                                                    <SearchIcon />
                                                </IconButton>
                                            </div>
                                            <p>or</p>
                                            <p>use my current position</p>
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