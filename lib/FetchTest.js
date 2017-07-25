import React from 'react';
import Key from './Key.js'

export default class FetchTest extends React.Component {
    render() {
        fetch('http://api.wunderground.com/api/' + Key + '/conditions/q/Colorado/Denver.json').then(function(response) {  
            response.json().then(function(data) {  
                console.log(data.current_observation.temp_f);  
            });  
        })  

        return (
            <h1 className='fetch'>Fetching</h1>
        )
    }
}