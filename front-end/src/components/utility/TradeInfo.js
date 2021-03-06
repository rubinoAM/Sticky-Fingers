import React, { Component } from 'react';

class TradeInfo extends Component{
    render(){
        //console.log(this.props);
        const u1Address = this.props.data.user1Address.city + ", " + this.props.data.user1Address.state + " " + this.props.data.user1Address.zip;
        const u2Address = this.props.data.user2Address.city + ", " + this.props.data.user2Address.state + " " + this.props.data.user2Address.zip;
        const sendOffDate = this.props.data.sendOffDate.slice(0,10);
        const returnDate = this.props.data.returnDate.slice(0,10);

        return(
            <div className="col s10 offset-s1 l6 offset-l3 trade-information">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="info-title">YOUR ADDRESS:</div>
                        <ul className="info-detail">
                            <li>{this.props.data.user1Address.street}</li>
                            <li>{u1Address}</li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <div className="info-title">THEIR ADDRESS:</div>
                        <ul className="info-detail">
                            <li>{this.props.data.user2Address.street}</li>
                            <li>{u2Address}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="info-title">SEND-OFF DATE:</div>
                        <div className="info-detail">{sendOffDate}</div>
                    </div>
                    <div className="col s12 m6">
                        <div className="info-title">RETURN DATE:</div>
                        <div className="info-detail">{returnDate}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TradeInfo;