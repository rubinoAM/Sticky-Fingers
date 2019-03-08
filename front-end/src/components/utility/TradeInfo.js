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
                        <ul className="info-detail">
                            <li>10872 E Via Cortana Rd</li>
                            <li>Scottsdale, AZ, 85262</li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <div className="info-title">THEIR ADDRESS:</div>
                        <ul className="info-detail">
                            <li>10566 W Morrison-Cleveland Ave</li>
                            <li>New Brunswick, New Jersey, 11310</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="info-title">SEND-OFF DATE:</div>
                        <div className="info-detail">February 22nd, 2019</div>
                    </div>
                    <div className="col s12 m6">
                        <div className="info-title">RETURN DATE:</div>
                        <div className="info-detail">March 28th, 2019</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TradeInfo;