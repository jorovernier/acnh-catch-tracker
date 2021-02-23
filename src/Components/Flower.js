import React from 'react';
import axios from 'axios';

export default class Flower extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grown: false,
            amount: ''
        }
        this.amountGrown = this.amountGrown.bind(this);
    }
    
    amountGrown(){
        axios.put('/api/update_flowers', {grown: this.state.amount, slot: this.props.id}).then(() => {
            this.props.getFlowers();
            this.setState({
                amount: ''
            });
        })
    }

    render(){
        const {flower, dbflower} = this.props;
        return(
            <div className='flower'>
                <div className='flower-image'>
                    <img src={flower.image} alt={`inventory icon of ${flower.name}`}/>
                </div>
                <span className='flower-name'>{flower.name}</span>
                <div className='flower-price'>
                    <p>Price:</p>
                    <span>{flower.price}</span>
                </div>
                <div className='flower-buttons'>
                    <p>Amount Grown:</p>
                    <span>{dbflower}</span>
                    <span className='flbutt'>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.amountGrown();
                        }}>
                            <input className='amount-input' type='number' value={this.state.amount} onChange={(e) => {e.target.value >= 0 ? (this.setState({amount: e.target.value})) : (window.alert('Please input a positive number.'))}} />
                            {this.state.amount && <button>Save</button>}
                        </form>
                    </span>
                </div>
            </div>
        )
    }
}