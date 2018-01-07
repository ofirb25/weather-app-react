import React from 'react';

function Cards(props) {

    var cities = props.cities
    var cards = cities.map(city => {
        return (
            <div className="city-card" key={city.name} 
            onClick={()=> {props.handleSelection(city.name)}}>
                <div className="image">
                    <img src={city.img} />
                </div>
                <div className="details">
                    <h3 className="title is-4">
                        {city.name}
                    </h3>
                </div>
            </div>)
    })
    return (
        <React.Fragment>
        <h2>Choose A city to see details</h2>
        <div className="cards-wrapper">
            {cards}
        </div>
        </React.Fragment>
    )
}

export default Cards;