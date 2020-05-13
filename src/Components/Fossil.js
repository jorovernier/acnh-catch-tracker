import React from 'react';
import axios from 'axios';

export default class Fossil extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            aquired: false
        }
        this.wasAquired = this.wasAquired.bind(this);
    }
    
    wasAquired(){
        let boolean;
        if(this.props.dbfossil === 0){
            boolean = 1;
        } else if(this.props.dbfossil === 1){
            boolean = 0;
        }
        axios.put('/api/update_fossils', {aquired: boolean, slot: this.props.id}).then(() => {
            this.props.getFossils();
        })
    }

    render(){
        const {fossil, dbfossil} = this.props;
        let colorC = (dbfossil ? 'red' : 'white');
        return(
            <div className='fossil'>
                <span className='fossil-name'>{fossil.part_name}</span>
                <div className='fossil-price'>
                    <p>Price:</p>
                    <span>{fossil.price}</span>
                </div>
                <div className='fossil-buttons'>
                    <span className='fobutt'>
                        <p>Aquired:</p>
                        <button onClick={() => this.wasAquired()}>
                            <p style={{color: colorC}}>X</p>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}