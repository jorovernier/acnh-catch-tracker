import React from 'react';
import axios from 'axios';
import '../SASS/Fishes.scss';
import Fish from './Fish';

export default class Fishes extends React.Component {
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
    })
  }

  render(){
    let mappedFish = this.state.fish.map((fish) => 
      <Fish fish={fish} key={fish.id}/>)
    return (
      <div className='mapped-fish'>{mappedFish}</div>
    )
  }
}