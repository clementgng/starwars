import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search'
import ShipList from './Components/ShipList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      ships: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.fetcher();
  }

  fetcher = async () => {
      let shipss = [];
      for (var i = 1; i < 5; i++) {
        const resp = await fetch(`https://swapi.co/api/starships/?page=${i}`);
        const data = await resp.json();
        const resultArray = data.results;
        await resultArray.map(ship => {
          shipss.push(ship);
          this.setState({ships: shipss})
        });
      }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const {ships, searchfield} = this.state;
    console.log(ships);
    const searchedShips = ships.filter(ship => {
      return ship.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (ships.length === 0) {
      return <h1 className='tc f1'>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Star Wars App</h1>
          <h3 className='f3'>Starships</h3>
          <Search searchChange={this.onSearchChange}/>
          <ShipList ships={searchedShips} />
        </div>
      )
    }
  }
}

export default App;
