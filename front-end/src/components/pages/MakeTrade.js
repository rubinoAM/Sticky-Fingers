import React, { Component } from 'react';
import './maketrade.css';
import TradeUser from '../utility/TradeUser';
import TradeRecipient from '../utility/TradeRecipient';

class MakeTrade extends Component{
    render(){
        return(
            <div className="make-trade-page">
                <div className="make-trade-header">
                    <h1>Make Trade</h1>
                    <span>Pick a person you wish to trade with and then pick a record you want them to trade. Then select a record you wish to trade to them.</span>
                </div>
                <div className="make-trade-body">
                    <TradeRecipient />
                    <TradeUser />
                </div>
            </div>
        )
    }
}

export default MakeTrade;