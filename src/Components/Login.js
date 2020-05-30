import React from 'react';
import {connect} from 'react-redux';
import {setUser} from '../redux/reducer';
import axios from 'axios';
import '../SASS/Login.scss';
import logo from '../Images/acnh-tracker-logo.png';
import nook from '../Images/nook.png';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            register: false,
            failed: false,
            created: false
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    async register(){
        const {username, password} = this.state;
        if(username.length && password.length) {
            this.setState({
                created: true
            })
            try {
                await axios.post('/auth/register', {username, password});
            } catch (error) {
                this.setState({
                    failed: true
                })
            }
        } else {
            window.alert('Please input a username and password.')
        }
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
        }
    }

    render(){
        const {username, password, register} = this.state;
        return (
            <div className='login-body'>
                <div className='bubble'>
                    <div className='welcome'>
                        <p>Welcome to the Animal Crossing New Horizons </p>
                        <img src={logo} alt='catch tracker' />
                    </div>
                    <div className='login-register'>
                        <div className='potential'>
                            <img src={nook} alt='Login to access tracking for fish, bugs, flowers, and fossils!'/>
                        </div>
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
                                {this.state.failed && !this.state.register && <div>Incorrect username or password.</div>}
                                {this.state.failed && this.state.register && <div>User already exists.</div>}
                                {this.state.created && this.state.register && !this.state.failed && <div>Account created! Please log in.</div>}
                                <div className='login-buttons'>
                                    <button className='submit'>Submit</button>
                                    {!register && <button className='switcher' onClick={() => {this.setState({register: true, failed: false})}}>Switch to Register</button>}
                                    {register && <button className='switcher' onClick={() => {this.setState({register: false, failed: false})}}>Switch to Login</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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