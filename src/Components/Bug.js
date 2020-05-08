import React from 'react';
import axios from 'axios';

export default class Bug extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            caught: false,
            // donated: false
        }
        this.wasCaught = this.wasCaught.bind(this);
        // this.wasDonated = this.wasDonated.bind(this);
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

    // wasDonated(){
    //     this.setState({
    //         donated: !this.state.donated
    //     })
    // }

    render(){
        const {bug, dbbug} = this.props;
        let colorC = (dbbug ? 'red' : 'white');
        // let colorD = (this.state.donated ? 'red' : 'white');
        return(
            <div className='bug'>
                <span className='bug-name'>{bug.name}</span>
                <div className='bug-loc'>
                    <p>Location:</p>
                    <span>{bug.location}</span>
                </div>
                <div className='bug-price'>
                    <p>Price:</p>
                    <span>{bug.price}</span>
                </div>
                <div className='bug-buttons'>
                    <span className='bbutt'>
                        <p>Caught:</p>
                        <button onClick={() => this.wasCaught()}>
                            <p style={{color: colorC}}>X</p>
                        </button>
                    </span>
                    {/* <span className='fbutt'>
                        <p>Donated:</p>
                        <button onClick={() => this.wasDonated()}>
                            <p style={{color: colorD}}>X</p>
                        </button>
                    </span> */}
                </div>
            </div>
        )
    }
}