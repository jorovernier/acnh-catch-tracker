import React from 'react';
import './App.css';
import Fishes from './Components/Fishes';
import Login from './Components/Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className='main'>
        <Login/>
        <Fishes/>
      </div>
    )
  }
}

export default App;
