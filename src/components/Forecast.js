import React, {Component} from 'react';
import Weather from './Weather';
import Form from "./Form";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

const API_KEY = '2424598ce56ddf7d1c89d3c9e4594e4c';
class Forecast extends Component {

    state = {
        city: undefined,
        date: undefined,
        temperature: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json
        &appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city){
            this.setState({
                temperature: Math.floor(data.list[0].main.temp),
                temperature1: Math.floor(data.list[1].main.temp),
                temperature2: Math.floor(data.list[2].main.temp),
                temperature3: Math.floor(data.list[3].main.temp),
                temperature4: Math.floor(data.list[4].main.temp),
                temperature5: Math.floor(data.list[5].main.temp),
                temperature6: Math.floor(data.list[6].main.temp),
                city: data.city.name,
                date: moment(Date(data.list[0].dt)).format('dddd, MMMM Do YYYY'),
                date1: moment(Date(data.list[1].dt)).format('dddd'),
                date2: moment(Date(data.list[2].dt)).format('dddd'),
                date3: moment(Date(data.list[3].dt)).format('dddd'),
                date4: moment(Date(data.list[4].dt)).format('dddd'),
                date5: moment(Date(data.list[5].dt)).format('dddd'),
                date6: moment(Date(data.list[6].dt)).format('dddd'),
                description: data.list[0].weather[0].description,
                error: ''
            });
        } else {
            this.setState({
                temperature: undefined,
                temperature1: undefined,
                temperature2: undefined,
                temperature3: undefined,
                temperature4: undefined,
                temperature5: undefined,
                temperature6: undefined,
                city: undefined,
                date: undefined,
                date1: undefined,
                date2: undefined,
                date3: undefined,
                date4: undefined,
                date5: undefined,
                date6: undefined,
                description: undefined,
                error: 'Please enter a city.'
            });
        }
    }
    render(){
        return(
            <div>
                <Form getWeather={this.getWeather}/>
                <MuiThemeProvider >
                    <div>
                        <div className="wrapper">
                            <div className="main">
                                <div className="container">
                                    <div className="row ">
                                        <div className="col-md-1">
                                                {/*{this.props.getWeather}*/}
                                            <form action="/">
                                                <div >
                                                    <IconButton className="iconButton" aria-label="Search" type="submit">
                                                        <ArrowBackIcon fontSize="large"/>
                                                    </IconButton>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-7" id="cityPaddingTop">
                                            <span id="cityName">
                                                <Weather
                                                    city={ this.state.city }
                                                />
                                            </span>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="float-right">
                                                <input type="checkbox" id="switch"/>
                                                <label htmlFor="switch" >Toggle</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <Weather
                                                date={ this.state.date }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <Weather
                                                description={ this.state.description }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Weather
                                                temperature={ this.state.temperature }
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <p>Morning</p>
                                            <p>Day</p>
                                            <p>Evening</p>
                                            <p>Night</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"><Weather
                                                date={ this.state.date1 }
                                            />
                                            <p>
                                                atm empt
                                            </p>
                                                <Weather
                                                    temperature={this.state.temperature1}
                                                />

                                        </div>
                                        <div className="col-md-2"><Weather
                                                date={ this.state.date2 }
                                            />
                                            <p>
                                                atm empt
                                            </p>
                                                <Weather
                                                    temperature={this.state.temperature2}
                                                />

                                        </div>
                                        <div className="col-md-2"><Weather
                                                date={ this.state.date3 }
                                            />
                                            <p>
                                                atm empt
                                            </p>
                                                <Weather
                                                    temperature={this.state.temperature3}
                                                />

                                        </div>
                                        <div className="col-md-2"><Weather
                                                date={ this.state.date4 }
                                            />
                                            <p>
                                                atm empt
                                            </p>
                                                <Weather
                                                    temperature={this.state.temperature4}
                                                />

                                        </div>
                                        <div className="col-md-2"><Weather
                                                date={ this.state.date5 }
                                            />
                                            <p>
                                                atm empt
                                            </p>
                                                <Weather
                                                    temperature={this.state.temperature5}
                                                />

                                        </div>
                                        <div className="col-md-2"><Weather
                                                date={ this.state.date6 }
                                            />
                                            <p>
                                                atm empt
                                            </p>
                                                <Weather
                                                    temperature={this.state.temperature6}
                                                />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
};

export default Forecast;