import React from 'react';
import './App.css';
import Fishes from './Components/Fishes';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className='main'>
        <Fishes/>
      </div>
    )
  }
}

export default App;
