import React from 'react';
import './SASS/App.scss';
import logo from './Images/acnh-tracker-logo.png';
import './Fonts/FinkHeavy.ttf';
import Fishes from './Components/Fishes';
import Bugs from './Components/Bugs';
import Login from './Components/Login';
import Logout from './Components/Logout';
import {connect} from 'react-redux';
import {Switch, NavLink, Route, withRouter, Redirect} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className='main'>
        {this.props.user && 
          <header className='llo'>
            <img className='logo' src={logo} alt='catch tracker'/>
            <div className='out-links'>
              <div className='navlinks'>
                <NavLink to='/fish' >Fish</NavLink>
                <NavLink to='/bugs' >Bugs</NavLink>
              </div>
              <Logout/>
            </div>
          </header>
        }
          <Switch>
            <Route exact path='/' render={(props) => (this.props.user ? <Redirect to='/fish' /> : <Login {...props}/>)} />
            {this.props.user && <Route path='/fish' component={Fishes} />}
            {this.props.user && <Route path='/bugs' component={Bugs} />}
            <Route path='*' render={() => {return <Redirect to='/' />}} />
          </Switch>
          <footer>
            <small>&copy; Copyright 2020 Joely Vernier All Rights Reserved</small>
          </footer>
      </div>
    )
  }
}

function mapReduxSateToProps(reduxState){
  return reduxState;
};

const invokedConnect = connect(mapReduxSateToProps);

export default invokedConnect(withRouter(App));