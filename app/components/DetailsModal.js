import React from 'react';

import cold from '../assets/images/cold.gif'
import warm from '../assets/images/warm.gif'

function DetailsModal(props) {
    var {data} = props;
    var weatherImg = data.main.temp <= 10 ? cold : warm
    var temp = parseInt(data.main.temp);

    return (
        <div className="my-modal">
            <div className="m-content">
                <span className="fa fa-times"
                onClick={props.handleCloseModal}
                ></span>
                <h2>{data.name}</h2>
                <div className="modal-img">
                <img src={data.img} />
                </div>
                <div className="weather-details">
                    <h4>{temp} &#8451;</h4>
                    <h4>{data.weather[0].main}</h4>
                    <img className="weatherimg" src={weatherImg} />
                </div>
            </div>
        </div> 
    )
}

export default DetailsModal