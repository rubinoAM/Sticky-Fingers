import React, { Component } from 'react';
import TradeItem from './TradeItem';
import TradeInfo from '../utility/TradeInfo';

class Trade extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="trade-header">
                            <span>Trade With [USERNAME]</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 trade-label">YOUR RECORD:</div>
                    <div className="col m6 hide-on-small-only trade-label">THEIR RECORD:</div>
                    <TradeItem />
                    <div className="col s12 hide-on-med-and-up trade-label">THEIR RECORD:</div>
                    <TradeItem />
                    <TradeInfo />
                </div>
                <hr/>
            </div>
        )
    }
}

export default Trade;