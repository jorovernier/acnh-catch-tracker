import React from 'react';
import axios from 'axios';

export default class Bug extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            caught: false
        }
        this.wasCaught = this.wasCaught.bind(this);
    }
    
    wasCaught(){
        let boolean;
        if(this.props.dbbug === 0){
            boolean = 1;
        } else if(this.props.dbbug === 1){
            boolean = 0;
        }
        axios.put('/api/update_bugs', {caught: boolean, slot: this.props.bug.id}).then(() => {
            this.props.getBugs();
        })
    }

    render(){
        const {bug, dbbug} = this.props;
        let colorC = (dbbug ? 'red' : 'white');
        return(
            <div className='bug'>
                <div className='img-name'>
                    <div className='bug-image'>
                        <img src={bug.image} alt={`inventory icon of ${bug.name}`}/>
                    </div>
                    <span className='bug-name'>{bug.name}</span>
                </div>
                <div className='bug-loc'>
                    <p>Location:</p>
                    <span>{bug.location}</span>
                </div>
                <div className='m-t'>
                    <div className='bug-months'>
                        <p>Months:</p>
                        <span>{bug.months.northern.text}</span>
                    </div>
                    <div className='bug-time'>
                        <p>Time:</p>
                        <span>{bug.times.text}</span>
                    </div>
                </div>
                <div className='bug-price'>
                    <p>Price:</p>
                    <span>{bug.price}</span>
                </div>
                <div className='bug-buttons'>
                    <span className='bbutt'>
                        <p className='caught'>Caught:</p>
                        <button onClick={() => this.wasCaught()}>
                            <p style={{color: colorC}}>X</p>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}