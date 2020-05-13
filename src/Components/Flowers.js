import React from 'react';
import axios from 'axios';
import '../SASS/Flowers.scss';
import Flower from './Flower';

export default class Flowers extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      flowers: [],
      dbflowers: []
    };
    this.getFlowers = this.getFlowers.bind(this);
  }

  componentDidMount(){
    axios.get('../flowers.json').then(response => {
      this.setState({
        flowers: response.data
      });
    })
    this.getFlowers();
  }

  getFlowers(){
    axios.get('/api/get_flowers').then(response => {
      this.setState({
        dbflowers: response.data[0]
      })
    })
  }

  render(){
    let mappedFlowers = this.state.flowers.map((flower, index) => 
      <Flower flower={flower} id={index + 1} dbid={`fl${index + 1}`} dbflower={this.state.dbflowers[`fl${index + 1}`]} getFlowers={this.getFlowers} key={flower.name}/>)
    return (
      <div className='mapped-flowers'>{mappedFlowers}</div>
    )
  }
}