import React from 'react';
import Header from './header'
import Cards from './Cards'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        { name: 'Tel Aviv', img: 'https://www3.danhotels.com/sites/default/files/styles/medium_12_25/public/2017-10/7716417222_8c1c2c5232_b_0.jpg?itok=ic3iNq7D' },
        { name: 'New York', img: 'https://www.citysightseeingnewyork.com/media/catalog/product/cache/2/small_image/9df78eab33525d08d6e5fb8d27136e95/e/m/emprie_state_building_16.jpg' },
        { name: 'Hong Kong', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO2TwTlNHP7iLtzwGBAY7sy4SNeAeKShCZiRvpJxVAHmOkuFTkQ' }]
      ,
      selectedCity: ''
      
    }
  }
  handleSelection = (city) => {
    console.log('city:', city);
    this.setState({selectedCity:city});

  }
  render() {
    return (
      <div className="container">
        <Header />
        <Cards 
        cities={this.state.cities} 
        handleSelection = {this.handleSelection}
        />
      </div>
    );
  }
}

export default App;
