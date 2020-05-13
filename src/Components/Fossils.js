import React from 'react';
import axios from 'axios';
import '../SASS/Fossils.scss';
import Fossil from './Fossil';

export default class Fossils extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      fossils: [],
      dbfossils: []
    };
    this.getFossils = this.getFossils.bind(this);
  }

  componentDidMount(){
    axios.get('../fossils.json').then(response => {
      this.setState({
        fossils: response.data
      });
    })
    this.getFossils();
  }

  getFossils(){
    axios.get('/api/get_fossils').then(response => {
      this.setState({
        dbfossils: response.data[0]
      })
    })
  }

  render(){
    let mappedFossils = this.state.fossils.map((fossil, index) => 
      <Fossil fossil={fossil} id={index + 1} dbid={`fo${index + 1}`} dbfossil={this.state.dbfossils[`fo${index + 1}`]} getFossils={this.getFossils} key={fossil.part_name}/>)
    return (
      <div className='mapped-fossils'>{mappedFossils}</div>
    )
  }
}