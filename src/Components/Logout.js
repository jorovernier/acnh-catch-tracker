import React from 'react';
import {connect} from 'react-redux';
import {setUser} from '../redux/reducer';
import axios from 'axios';
import '../SASS/Login.scss';

class Logout extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className='logout'>
                <button className='out-butt' onClick={() => {
                    axios.delete('/auth/logout').then(() => {
                    this.props.setUser(null);
                    });
                    window.alert('See you later!');
                }} >Logout</button>
            </div>
        )
    }
}


function mapReduxSateToProps(reduxState){
    return reduxState;
};

const mapDispatchToProps = {
    setUser
};

const enhancedComponent = connect(
    mapReduxSateToProps,
    mapDispatchToProps
    );

export default enhancedComponent(Logout);