import React from 'react';

export default class Fish extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            caught: false,
            donated: false
        }
        this.wasCaught = this.wasCaught.bind(this);
        this.wasDonated = this.wasDonated.bind(this);
    }

    wasCaught(){
        this.setState({
            caught: !this.state.caught
        })
    }

    wasDonated(){
        this.setState({
            donated: !this.state.donated
        })
    }

    render(){
        const {fish} = this.props;
        let colorC = (this.state.caught ? 'red' : 'white');
        let colorD = (this.state.donated ? 'red' : 'white');
        return(
            <div className='fish'>
                <span className='fish-name'>{fish.name}</span>
                <div className='fish-loc'>
                    <p>Location:</p>
                    <span>{fish.location}</span>
                </div>
                <div className='fish-price'>
                    <p>Price:</p>
                    <span>{fish.price}</span>
                </div>
                <div className='fish-buttons'>
                    <span className='fbutt'>
                        <p>Caught:</p>
                        <button onClick={() => this.wasCaught()}>
                            <p style={{color: colorC}}>X</p>
                        </button>
                    </span>
                    <span className='fbutt'>
                        <p>Donated:</p>
                        <button onClick={() => this.wasDonated()}>
                            <p style={{color: colorD}}>X</p>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}