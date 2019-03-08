import React, { Component } from 'react';
import TradeItem from './TradeItem';
import TradeInfo from '../utility/TradeInfo';

class Trade extends Component{
    render(){
        //console.log(this.props);
        const tradeItemOne = this.props.data.user1Trade;
        const tradeItemTwo = this.props.data.user2Trade;

        const tradeInfo = {
            user1Address:this.props.data.user1Address,
            user2Address:this.props.data.user2Address,
            returnDate: this.props.data.returnDate,
            sendOffDate: this.props.data.sendOffDate,
        }

        return(
            <div>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="trade-header">
                            <span>Trade With {this.props.data.user2Trade.userName}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 trade-label">YOUR RECORD:</div>
                    <div className="col m6 hide-on-small-only trade-label">THEIR RECORD:</div>
                    <TradeItem data={tradeItemOne} />
                    <div className="col s12 hide-on-med-and-up trade-label">THEIR RECORD:</div>
                    <TradeItem data={tradeItemTwo} />
                    <TradeInfo data={tradeInfo}/>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Trade;