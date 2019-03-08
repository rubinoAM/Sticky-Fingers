import React, { Component } from 'react';

class TradeInfo extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="col s10 offset-s1 l6 offset-l3 trade-information">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="info-title">YOUR ADDRESS:</div>
                        <div className="info-detail">DOG</div>
                    </div>
                    <div className="col s12 m6">
                        <div className="info-title">THEIR ADDRESS:</div>
                        <div className="info-detail">DOG</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="info-title">SEND-OFF DATE</div>
                        <div className="info-detail">BARK BARK</div>
                    </div>
                    <div className="col s12 m6">
                        <div className="info-title">RETURN DATE</div>
                        <div className="info-detail">BARK BARK</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TradeInfo;