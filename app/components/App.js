import React from 'react';

import Header from './header'
import Cards from './Cards'
import DetailsModal from './DetailsModal'
import Loading from './Loading'

import api from '../utils/api';
import { setTimeout } from 'timers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        { name: 'Tel Aviv', img: 'https://www3.danhotels.com/sites/default/files/styles/medium_12_25/public/2017-10/7716417222_8c1c2c5232_b_0.jpg?itok=ic3iNq7D' },
        { name: 'New York', img: 'https://www.citysightseeingnewyork.com/media/catalog/product/cache/2/small_image/9df78eab33525d08d6e5fb8d27136e95/e/m/emprie_state_building_16.jpg' },
        { name: 'Hong Kong', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO2TwTlNHP7iLtzwGBAY7sy4SNeAeKShCZiRvpJxVAHmOkuFTkQ' }]
      ,
      selectedCity: null,
      isFetching: false

    }
  }
  handleSelection = (city) => {
    this.setState({ isFetching: true })
    console.log('city:', city);
    var localCityData = this.state.cities.find(currCity => currCity.name === city)
    api.getCityData_server(city)
      .then(data => {
        setTimeout(() => {
          this.setState({
            selectedCity: { ...data, ...localCityData },
            isFetching: false
          });
        }, 1000)

      })
      .catch(err => alert(err))
  }
  handleCloseModal = () => {
    this.setState({ selectedCity: null })
  }
  render() {
    return (
      <div className="my-container">
        <Header />
        <Cards
          cities={this.state.cities}
          handleSelection={this.handleSelection}
        />
        {this.state.isFetching ? <Loading /> : null}
        {this.state.selectedCity ? <DetailsModal
          handleCloseModal={this.handleCloseModal}
          data={this.state.selectedCity}
        /> : null}
      </div>
    );
  }
}

export default App;
