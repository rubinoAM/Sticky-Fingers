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
                <form className="make-trade-body">
                    <TradeRecipient />
                    <TradeUser />
                    <center className="row">
                        <button className="btn make-trade-btn col s8 offset-s2 m4 offset-m4">Submit</button>
                    </center>
                </form>
            </div>
        )
    }
}

export default MakeTrade;