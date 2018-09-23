import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox'
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state = {
			planets:[],
      searchfield:''
		}
	}

	componentDidMount() {
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(result => result = result.results)
      .then(data => this.setState({ planets: data }))
	}


    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
}

  render() {
      const filterPlanets = this.state.planets.filter(planet => {
        return planet.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      if(this.state.planets.length===0) {return <h1 className='tc'>loading</h1>} else   
         { return (
                     <div className='tc stars'>
                       <div className = 'twinkling'>
                         <div className = 'clouds'>
                            <h1 className = 'f1'>STAR WARS PLANETS</h1>
                            <SearchBox searchChange={this.onSearchChange}/>
                            <CardList planets={filterPlanets} />  
                         </div>
                       </div>
                     </div>)}
     
  }
}

export default App;
