import React from 'react';
import axios from 'axios';
import '../SASS/Bugs.scss';
import Bug from './Bug';

export default class Bugs extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      bugs: [],
      dbbugs: []
    };
    this.getBugs = this.getBugs.bind(this);
  }

  componentDidMount(){
    axios.get('../bugs.json').then(response => {
      this.setState({
        bugs: response.data
      });
    })
    this.getBugs();
  }

  getBugs(){
    axios.get('/api/get_bugs').then(response => {
      this.setState({
        dbbugs: response.data[0]
      })
    })
  }

  render(){
    let mappedBugs = this.state.bugs.map((bug) => 
      <Bug bug={bug} dbid={`b${bug.id}`} dbbug={this.state.dbbugs[`b${bug.id}`]} getBugs={this.getBugs} key={bug.id}/>)
    return (
      <div className='mapped-bugs'>{mappedBugs}</div>
    )
  }
}