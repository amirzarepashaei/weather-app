import React from 'react';

const Weather = (props) => (
            <div >
                {
                    props.city && <span className='weather__value'>{ props.city }</span>
                }{
                    props.date && <span >{ props.date }</span>
                }{
                    props.date1 && <span >{ props.date1 }</span>
                }{
                    props.date2 && <span >{ props.date2 }</span>
                }{
                    props.date3 && <span >{ props.date3 }</span>
                }{
                    props.date4 && <span >{ props.date4 }</span>
                }{
                    props.date5 && <span >{ props.date5 }</span>
                }{
                props.description && <p><span className='weather__ds'>{ props.description }</span></p>
                }{
                props.temperature &&  <span >{ props.temperature }</span>
                }{
                    props.temperature1 &&  <span >{ props.temperature1 }</span>
                }{
                    props.temperature2 &&  <span >{ props.temperature2 }</span>
                }{
                    props.temperature3 &&  <span >{ props.temperature3 }</span>
                }{
                    props.temperature4 &&  <span >{ props.temperature4 }</span>
                }{
                    props.temperature5 &&  <span >{ props.temperature5 }</span>
                }{
                    props.datePart1 &&  <span >{ props.datePart1 }</span>
                }{
                    props.datePart2 &&  <span >{ props.datePart2 }</span>
                }{
                    props.datePart3 &&  <span >{ props.datePart3 }</span>
                }{
                    props.datePart4 &&  <span >{ props.datePart4 }</span>
                }{
                    props.error && <p className='weather__error'>{ props.error }</p>
                }
            </div>
);

export default Weather;