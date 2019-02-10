import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Forecast from './components/Forecast';
import { NavLink} from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';


// const API_KEY = '2424598ce56ddf7d1c89d3c9e4594e4c';
class App extends Component {

    // state = {
    //     city: undefined,
    //     date: undefined,
    //     temperature: undefined,
    //     country: undefined,
    //     humidity: undefined,
    //     description: undefined,
    //     error: undefined
    // }
    // getWeather = async(e) => {
    //     e.preventDefault();
    //     const city = e.target.elements.city.value;
    //     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json
    //     &appid=${API_KEY}&units=metric`);
    //     const data = await api_call.json();
    //     if (city){
    //         this.setState({
    //             temperature: data.list[0].main.temp,
    //             city: data.city.name,
    //             error: ''
    //         });
    //     } else {
    //         this.setState({
    //             temperature: undefined,
    //             city: undefined,
    //             error: 'Please enter a city.'
    //         });
    //     }
    // }
    render() {
    return (

        <BrowserRouter>
           <div>
               {/*<Navigation />*/}
               <Switch>
                   <Route path="/" component={Form} exact/>
                   <Route path="/weather" component={Weather}/>
                   <Route path="/forecast" component={Forecast}/>
                   <Route component={Error}/>
               </Switch>
               {/*<MuiThemeProvider>*/}
                   {/*<div className="App">*/}
                       {/*<div className="wrapper">*/}
                           {/*<div className="main">*/}
                               {/*<div className="container">*/}
                                   {/*<div className="row my-auto">*/}
                                       {/*<div className="col-sm-6 offset-sm-3 text-center">*/}
                                           {/*<Form getWeather={this.getWeather}/>*/}
                                           {/*<Weather*/}
                                               {/*temperature={this.state.temperature}*/}
                                               {/*city={this.state.city}*/}
                                               {/*error={this.state.error}*/}
                                           {/*/>*/}
                                       {/*</div>*/}
                                   {/*</div>*/}
                               {/*</div>*/}
                           {/*</div>*/}
                       {/*</div>*/}
                   {/*</div>*/}
               {/*</MuiThemeProvider>*/}
           </div>
        </BrowserRouter>

    );
  }
}

export default App;
