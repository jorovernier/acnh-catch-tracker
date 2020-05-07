import React from 'react';
import './App.css';
import Fishes from './Components/Fishes';
import Login from './Components/Login';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    console.log(this.props);
    return (
      <div className='main'>
        <Login/>
        {this.props.user && <Fishes/>}
      </div>
    )
  }
}

function mapReduxSateToProps(reduxState){
  return reduxState;
};

const enhancedComponent = connect(
  mapReduxSateToProps
);

export default enhancedComponent(App);