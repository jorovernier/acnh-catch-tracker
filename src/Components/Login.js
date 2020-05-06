import React from 'react';
import {connect} from 'react-redux';
import {setUser} from '../redux/reducer';
// import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            register: false,
            failed: false
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    async register(){
        const {username, password} = this.state;
        const registeredUser = await axios.post('/auth/register', {username, password});
        this.props.setUser(registeredUser.data);
    }

    async login(){
        const {username, password} = this.state;
        try {
            const loggedInUser = await axios.post('/auth/login', {username, password});
            this.props.setUser(loggedInUser.data);
        } catch (error) {
            this.setState({
                failed: true
            })
            console.log(error)
        }
    }

    render(){
        const {username, password, register} = this.state;
        return this.props.user ? (
            <div>
                <button className='logout' onClick={() => {
                    axios.delete('/auth/logout').then(() => {
                    this.props.setUser(null);
                    });
                    window.alert('See you later!');
                }} >Logout</button>
            </div>
            ) : (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(register){
                        this.register();
                    } else {
                        this.login();
                    }
                }}>
                    <div className='inputs'>
                            <div className='username-i'>
                                <label>Username</label>
                                <input type='username' value={username} onChange={(e) => this.setState({
                                    username: e.target.value
                                })} />
                            </div>
                        <div className='password-i'>
                            <label>Password</label>
                            <input type='password' value={password} onChange={(e) => this.setState({
                                password: e.target.value
                            })} />
                        </div>
                        {this.state.failed && <div>Incorrect username or password.</div>}
                        <button className='submit'>Submit</button>
                    </div>
                    {!register && <button className='switcher' onClick={() => {this.setState({register: true})}}>Switch to Register</button>}
                    {register && <button className='switcher' onClick={() => {this.setState({register: false})}}>Switch to Login</button>}
                </form>
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

export default enhancedComponent(Login);