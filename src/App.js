import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import './assets/weather-icons.min.css';
import Error from './components/Error';
// import Navigation from './components/Navigation';
import Forecast from './components/Forecast';

class App extends Component {

    render() {
    return (
        <BrowserRouter>
           <div>
               {/*<Navigation />*/}
               <Switch>
                   <Route path="/" component={Forecast} exact/>
                   {/*<Route path="/weather" component={Weather}/>*/}
                   <Route path="/forecast" component={Forecast}/>
                   <Route component={Error}/>
               </Switch>
           </div>
        </BrowserRouter>
    );
  }
}

export default App;
