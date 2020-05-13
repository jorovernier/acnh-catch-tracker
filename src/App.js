import React from 'react';
import './SASS/App.scss';
import './Fonts/FinkHeavy.ttf';
import logo from './Images/acnh-tracker-logo.png';
import Fishies from './Components/Fishies';
import Bugs from './Components/Bugs';
import Flowers from './Components/Flowers';
import Fossils from './Components/Fossils';
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
                <NavLink to='/flowers' >Flowers</NavLink>
                <NavLink to='/fossils' >Fossils</NavLink>
              </div>
              <Logout/>
            </div>
          </header>
        }
          <Switch>
            <Route exact path='/' render={(props) => (this.props.user ? <Redirect to='/fish' /> : <Login {...props}/>)} />
            {this.props.user && <Route path='/fish' component={Fishies} />}
            {this.props.user && <Route path='/bugs' component={Bugs} />}
            {this.props.user && <Route path='/flowers' component={Flowers} />}
            {this.props.user && <Route path='/fossils' component={Fossils} />}
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