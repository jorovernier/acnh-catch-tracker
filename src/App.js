import React from 'react';
import axios from 'axios';
// import json from '../public/fish.json';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fish: []
    };
  }
  componentDidMount(){
    axios.get('../fish.json').then(response => {
      this.setState({
        fish: response.data
      });
      console.log(response)
    })
  }
  render(){
    let mappedFish = this.state.fish.map((fish) => 
      <div key={fish.id}>
        <div>{fish.name}</div>
        <div>{fish.location}</div>
        <div>{fish.price}</div>
      </div>)
    return (
      <div>{mappedFish}</div>
    )
  }
}

export default App;
