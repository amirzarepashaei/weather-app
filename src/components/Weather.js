import React from 'react';

const Weather = (props) => (
            <div >
                {
                    props.city && <span className='weather__value'>{ props.city }</span>
                }{
                    props.date && <p><span className='weather__ds'>{ props.date }</span></p>
                }{
                    props.date1 && <p><span className='weather__ds'>{ props.date1 }</span></p>
                }{
                    props.date2 && <p><span className='weather__ds'>{ props.date2 }</span></p>
                }{
                    props.date3 && <p><span className='weather__ds'>{ props.date3 }</span></p>
                }{
                    props.date4 && <p><span className='weather__ds'>{ props.date4 }</span></p>
                }{
                    props.date5 && <p><span className='weather__ds'>{ props.date5 }</span></p>
                }{
                    props.date6 && <p><span className='weather__ds'>{ props.date6 }</span></p>
                }{
                    props.description && <p><span className='weather__ds'>{ props.description }</span></p>
                }{
                    props.temperature && <p> <span className='weather__temp'>{ props.temperature }</span><span> °C</span></p>
                }{
                    props.temperature1 && <p> <span className='weather__temp'>{ props.temperature1 }</span><span> °C</span></p>
                }{
                    props.temperature2 && <p> <span className='weather__temp'>{ props.temperature2 }</span><span> °C</span></p>
                }{
                    props.temperature3 && <p> <span className='weather__temp'>{ props.temperature3 }</span><span> °C</span></p>
                }{
                    props.temperature4 && <p> <span className='weather__temp'>{ props.temperature4 }</span><span> °C</span></p>
                }{
                    props.temperature5 && <p> <span className='weather__temp'>{ props.temperature5 }</span><span> °C</span></p>
                }{
                    props.temperature6 && <p> <span className='weather__temp'>{ props.temperature6 }</span><span> °C</span></p>
                }
                {
                    props.error && <p className='weather__error'>{ props.error }</p>
                }

            </div>
);

export default Weather;