import React from 'react';
import axios from 'axios';

export default class Fish extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            caught: false
        }
        this.wasCaught = this.wasCaught.bind(this);
    }
    
    wasCaught(){
        let boolean;
        if(this.props.dbfish === 0){
            boolean = 1;
        } else if(this.props.dbfish === 1){
            boolean = 0;
        }
        axios.put('/api/update_fish', {caught: boolean, slot: this.props.fish.id}).then(() => {
            this.props.getFish();
        })
    }

    render(){
        const {fish, dbfish} = this.props;
        let colorC = (dbfish ? 'red' : 'white');
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
                </div>
            </div>
        )
    }
}