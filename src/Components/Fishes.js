import React from 'react';
import axios from 'axios';
import '../SASS/Fishes.scss';
import Fish from './Fish';

export default class Fishes extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      fish: [],
      dbfish: []
    };
    this.getFish = this.getFish.bind(this);
  }

  componentDidMount(){
    axios.get('../fish.json').then(response => {
      this.setState({
        fish: response.data
      });
    })
    this.getFish();
  }

  getFish(){
    axios.get('/api/get_fish').then(response => {
      this.setState({
        dbfish: response.data[0]
      })
    })
  }

  render(){
    let mappedFish = this.state.fish.map((fish) => 
      <Fish fish={fish} dbid={`f${fish.id}`} dbfish={this.state.dbfish[`f${fish.id}`]} getFish={this.getFish} key={fish.id}/>)
    return (
      <div className='mapped-fish'>{mappedFish}</div>
    )
  }
}