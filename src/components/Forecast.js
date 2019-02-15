import React, {Component} from 'react';
import Weather from './Weather';
import Form from "./Form";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
import $ from "jquery";

const API_KEY = '2424598ce56ddf7d1c89d3c9e4594e4c';
class Forecast extends Component {
    state = {
        city: undefined,
        date: undefined,
        date0: undefined,
        date1: undefined,
        date2: undefined,
        date3: undefined,
        date4: undefined,
        date5: undefined,
        temperature: undefined,
        temperature1: undefined,
        temperature2: undefined,
        temperature3: undefined,
        temperature4: undefined,
        temperature5: undefined,
        datePart1: undefined,
        datePart2: undefined,
        datePart3: undefined,
        datePart4: undefined,
        description: undefined,
        error: undefined
    }
    weatherCodes = {
        200: 'wi wi-owm-day-200',
        201: 'wi wi-owm-day-201',
        202: 'wi wi-owm-day-202',
        210: 'wi wi-owm-day-210',
        211: 'wi wi-owm-day-211',
        212: 'wi wi-owm-day-212',
        221: 'wi wi-owm-day-221',
        230: 'wi wi-owm-day-230',
        231: 'wi wi-owm-day-231',
        232: 'wi wi-owm-day-232',
        300: 'wi wi-owm-day-300',
        301: 'wi wi-owm-day-301',
        302: 'wi wi-owm-day-302',
        310: 'wi wi-owm-day-310',
        311: 'wi wi-owm-day-311',
        312: 'wi wi-owm-day-312',
        313: 'wi wi-owm-day-313',
        314: 'wi wi-owm-day-314',
        321: 'wi wi-owm-day-321',
        500: 'wi wi-owm-day-500',
        501: 'wi wi-owm-day-501',
        502: 'wi wi-owm-day-502',
        503: 'wi wi-owm-day-503',
        504: 'wi wi-owm-day-504',
        511: 'wi wi-owm-day-511',
        520: 'wi wi-owm-day-520',
        521: 'wi wi-owm-day-521',
        522: 'wi wi-owm-day-522',
        531: 'wi wi-owm-day-531',
        600: 'wi wi-owm-day-600',
        601: 'wi wi-owm-day-601',
        602: 'wi wi-owm-day-602',
        611: 'wi wi-owm-day-611',
        612: 'wi wi-owm-day-612',
        615: 'wi wi-owm-day-615',
        616: 'wi wi-owm-day-616',
        620: 'wi wi-owm-day-620',
        621: 'wi wi-owm-day-621',
        622: 'wi wi-owm-day-622',
        701: 'wi wi-owm-day-701',
        711: 'wi wi-owm-day-711',
        721: 'wi wi-owm-day-721',
        731: 'wi wi-owm-day-731',
        741: 'wi wi-owm-day-741',
        761: 'wi wi-owm-day-761',
        762: 'wi wi-owm-day-762',
        781: 'wi wi-owm-day-781',
        800: 'wi wi-owm-day-800',
        801: 'wi wi-owm-day-801',
        802: 'wi wi-owm-day-802',
        803: 'wi wi-owm-day-803',
        804: 'wi wi-owm-day-804',
        900: 'wi wi-owm-day-900',
        902: 'wi wi-owm-day-902',
        906: 'wi wi-owm-day-906',
        957: 'wi wi-owm-day-957',
        903: 'wi wi-owm-day-903',
        904: 'wi wi-owm-day-904',
    }
    getWeather = async(e) => {
        e.preventDefault();
        let lat = "";
        let lon = "";
        let celsius = "°C";
        let fahrenheit = "°F";
        let city = e.target.elements.city.value;
        // localStorage.setItem("city", city);
        let api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json
        &appid=${API_KEY}&units=metric`);
        if (navigator.geolocation){
            navigator.geolocation.watchPosition(function(position){
                lat = position.coords.latitude.toFixed(1);
                lon = position.coords.longitude.toFixed(1);
            }, function (positionError) {
                console.log(positionError);
            });
            // navigator.geolocation.clearWatch(watch);
        }
        if ($("#switch").is(":checked")){
            api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${API_KEY}&units=imperial`);

        } else {
            api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${API_KEY}&units=metric`);

        }
        if (city === ""){
            api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`) ;
        }
        const data = await api_call.json();
        $("#switch").on("change", function(){
            if ($("#switch").is(":checked")){
                $(".degree__CF").text(fahrenheit);
                $(".degree__CF__day").text(fahrenheit);
                $(".degree__CF__forecast").text(fahrenheit);
                api_call = $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" +city+"&mode=json&appid="+API_KEY+"&units=imperial",function (data){
                    let temp = (data.list[0].main.temp).toFixed();
                    let temp0 = (data.list[0].main.temp).toFixed();
                    let temp1 = (data.list[8].main.temp).toFixed();
                    let temp2 = (data.list[16].main.temp).toFixed();
                    let temp3 = (data.list[24].main.temp).toFixed();
                    let temp4 = (data.list[32].main.temp).toFixed();
                    let temp5 = (data.list[39].main.temp).toFixed();
                    let datePart1 = (data.list[6].main.temp).toFixed();
                    let datePart2 = (data.list[7].main.temp).toFixed();
                    let datePart3 = (data.list[9].main.temp).toFixed();
                    let datePart4 = (data.list[10].main.temp).toFixed();
                    $("#wea__tem").text(temp);
                    $("#wea__tem0").text(temp0);
                    $("#wea__tem1").text(temp1);
                    $("#wea__tem2").text(temp2);
                    $("#wea__tem3").text(temp3);
                    $("#wea__tem4").text(temp4);
                    $("#wea__tem5").text(temp5);
                    $("#mor__temp").text(datePart1);
                    $("#day__temp").text(datePart2);
                    $("#eve__temp").text(datePart3);
                    $("#nig__temp").text(datePart4);
                });
            } else {
                $(".degree__CF").text(celsius);
                $(".degree__CF__day").text(celsius);
                $(".degree__CF__forecast").text(celsius);
                api_call = $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" +city+"&mode=json&appid="+API_KEY+"&units=metric",function (data){
                    let temp = (data.list[0].main.temp).toFixed();
                    let temp0 = (data.list[0].main.temp).toFixed();
                    let temp1 = (data.list[8].main.temp).toFixed();
                    let temp2 = (data.list[16].main.temp).toFixed();
                    let temp3 = (data.list[24].main.temp).toFixed();
                    let temp4 = (data.list[32].main.temp).toFixed();
                    let temp5 = (data.list[39].main.temp).toFixed();
                    let datePart1 = (data.list[6].main.temp).toFixed();
                    let datePart2 = (data.list[7].main.temp).toFixed();
                    let datePart3 = (data.list[9].main.temp).toFixed();
                    let datePart4 = (data.list[10].main.temp).toFixed();
                    $("#wea__tem").text(temp);
                    $("#wea__tem0").text(temp0);
                    $("#wea__tem1").text(temp1);
                    $("#wea__tem2").text(temp2);
                    $("#wea__tem3").text(temp3);
                    $("#wea__tem4").text(temp4);
                    $("#wea__tem5").text(temp5);
                    $("#mor__temp").text(datePart1);
                    $("#day__temp").text(datePart2);
                    $("#eve__temp").text(datePart3);
                    $("#nig__temp").text(datePart4);
                });
            }
        });
        let code = data.list[0].weather[0].id;
        let code1 = data.list[8].weather[0].id;
        let code2 = data.list[16].weather[0].id;
        let code3 = data.list[24].weather[0].id;
        let code4 = data.list[32].weather[0].id;
        let code5 = data.list[39].weather[0].id;
        let icon = this.weatherCodes[code];
        let icon1 = this.weatherCodes[code1];
        let icon2 = this.weatherCodes[code2];
        let icon3 = this.weatherCodes[code3];
        let icon4 = this.weatherCodes[code4];
        let icon5 = this.weatherCodes[code5];
        $(".icon").addClass(icon);
        $(".icon1").addClass(icon1);
        $(".icon2").addClass(icon2);
        $(".icon3").addClass(icon3);
        $(".icon4").addClass(icon4);
        $(".icon5").addClass(icon5);
        $("#frmc").css("display", "none");
        $("#MuiThemeProvider").css("display", "block");
        if (city || (lat && lon)){
            this.setState({
                temperature: (data.list[0].main.temp).toFixed(),
                temperature1: (data.list[6].main.temp).toFixed(),
                temperature2: (data.list[13].main.temp).toFixed(),
                temperature3: (data.list[21].main.temp).toFixed(),
                temperature4: (data.list[29].main.temp).toFixed(),
                temperature5: (data.list[37].main.temp).toFixed(),
                city: data.city.name,
                date: moment(data.list[0].dt_txt).format('dddd, MMMM Do YYYY'),
                date0: moment(data.list[0].dt_txt).format('dddd'),
                date1: moment(data.list[8].dt_txt).format('dddd'),
                date2: moment(data.list[16].dt_txt).format('dddd'),
                date3: moment(data.list[24].dt_txt).format('dddd'),
                date4: moment(data.list[32].dt_txt).format('dddd'),
                date5: moment(data.list[39].dt_txt).format('dddd'),
                datePart1: (data.list[6].main.temp).toFixed(),
                datePart2: (data.list[7].main.temp).toFixed(),
                datePart3: (data.list[9].main.temp).toFixed(),
                datePart4: (data.list[10].main.temp).toFixed(),
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
                city: undefined,
                date: undefined,
                date0: undefined,
                date1: undefined,
                date2: undefined,
                date3: undefined,
                date4: undefined,
                date5: undefined,
                datePart1: undefined,
                datePart2: undefined,
                datePart3: undefined,
                datePart4: undefined,
                description: undefined,
                error: 'Please enter a city.'
            });
        }
    }
    render(){
        return(
            <div>
                <div id="frmc">
                    <Form getWeather={this.getWeather}/>
                </div>
                <MuiThemeProvider >
                    <div id="MuiThemeProvider">
                        <div className="wrapper">
                            <div className="main">
                                <div className="container">
                                    <div className="row" id="firstRow">
                                        <div className="col-md-1">
                                            <form action="/forecast">
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
                                                <input type="checkbox" id="switch"  />
                                                <label htmlFor="switch" >&nbsp;&nbsp;°C &emsp; °F</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <span className='weather__dt'>
                                                <Weather
                                                    date={ this.state.date }
                                                    description={ this.state.description }
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <span className="weather__temp" >
                                                <Weather
                                                    temperature={ this.state.temperature && <span id="wea__tem"> {this.state.temperature}
                                                          </span>}
                                                />
                                                <span className="degree__CF">°C</span>
                                                <i className="icon weatherSign" ></i>
                                            </span>
                                        </div>
                                        <div className="col-md-6 day__time">
                                            <div className="col">
                                                <span>Morning</span>
                                                    <span className="fl" id="morning">
                                                        <Weather date={this.state.datePart1 && <span id="mor__temp">{this.state.datePart1}
                                                        </span>}/>
                                                        <span className="degree__CF__day">°C</span>
                                                    </span><br/>
                                                <span>Day</span>
                                                    <span className="fl" id="day">
                                                        <Weather date={this.state.datePart2 && <span id="day__temp">{this.state.datePart2}
                                                        </span>}/>
                                                        <span className="degree__CF__day">°C</span>
                                                    </span><br/>
                                                <span>Evening</span>
                                                    <span className="fl" id="evening">
                                                        <Weather date={this.state.datePart3 && <span id="eve__temp">{this.state.datePart3}
                                                        </span>}/>
                                                        <span className="degree__CF__day">°C</span>
                                                    </span><br/>
                                                <span>Night</span>
                                                    <span className="fl" id="night">
                                                        <Weather date={this.state.datePart4 && <span id="nig__temp">{this.state.datePart4}
                                                        </span>}/>
                                                        <span className="degree__CF__day">°C</span>
                                                    </span><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row topSpace">
                                        <div className="col-md-2">
                                            <span className="weather__dtsub">
                                                <Weather
                                                    date={ this.state.date0 }
                                                />
                                            </span><br/>
                                            <p>
                                                <i className="icon weatherSignSub"></i>
                                            </p>
                                            <span className="weather__tempsub">
                                                <Weather
                                                    temperature={this.state.temperature && <span className="pdlf" id="wea__tem0">
                                                        {this.state.temperature}
                                                    </span>}
                                                />
                                                <span className="degree__CF__forecast">°C</span>
                                            </span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="weather__dtsub">
                                                <Weather
                                                    date={ this.state.date1 }
                                                /><br/>
                                            </span>
                                            <p>
                                                <i className="icon1 weatherSignSub"></i>
                                            </p>
                                                <span className="weather__tempsub">
                                                    <Weather
                                                        temperature={this.state.temperature1 && <span className="pdlf" id="wea__tem1">
                                                            {this.state.temperature1}
                                                        </span>}
                                                    />
                                                    <span className="degree__CF__forecast">°C</span>
                                                </span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="weather__dtsub">
                                                <Weather
                                                    date={ this.state.date2 }
                                                /><br/>
                                            </span>
                                            <p>
                                                <i className="icon2 weatherSignSub"></i>
                                            </p>
                                                <span className="weather__tempsub">
                                                    <Weather
                                                        temperature={this.state.temperature2 && <span className="pdlf" id="wea__tem2">
                                                            {this.state.temperature2}
                                                        </span>}
                                                    />
                                                    <span className="degree__CF__forecast">°C</span>
                                                </span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="weather__dtsub">
                                                <Weather
                                                    date={ this.state.date3 }
                                                /><br/>
                                            </span>
                                            <p>
                                                <i className="icon3 weatherSignSub"></i>
                                            </p>
                                                <span className="weather__tempsub">
                                                    <Weather
                                                        temperature={this.state.temperature3 && <span className="pdlf" id="wea__tem3">
                                                            {this.state.temperature3}
                                                        </span>}
                                                    />
                                                    <span className="degree__CF__forecast">°C</span>
                                                </span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="weather__dtsub">
                                                <Weather
                                                    date={ this.state.date4 }
                                                /><br/>
                                            </span>
                                            <p>
                                                <i className="icon4 weatherSignSub"></i>
                                            </p>
                                               <span className="weather__tempsub">
                                                    <Weather
                                                        temperature={this.state.temperature4 && <span className="pdlf" id="wea__tem4">
                                                            {this.state.temperature4}
                                                        </span>}
                                                    />
                                                    <span className="degree__CF__forecast">°C</span>
                                               </span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="weather__dtsub">
                                                <Weather
                                                    date={ this.state.date5 }
                                                /><br/>
                                            </span>
                                            <p>
                                                <i className="icon5 weatherSignSub"></i>
                                            </p>
                                            <span className="weather__tempsub">
                                                <Weather
                                                    temperature={this.state.temperature5 && <span className="pdlf" id="wea__tem5">
                                                        {this.state.temperature5}
                                                    </span>}
                                                />
                                                <span className="degree__CF__forecast">°C</span>
                                            </span>
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