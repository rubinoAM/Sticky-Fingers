import React, { Component } from 'react';
import TradeItem from './TradeItem';
import TradeInfo from '../utility/TradeInfo';

class Trade extends Component{
    render(){
        console.log(this.props);
        const user1Address = {
            street: this.props.data.u1Street,
            city: this.props.data.u1City,
            state: this.props.data.u1State,
            zip: this.props.data.u1Zip,
        }

        const user2Address = {
            street: this.props.data.u2Street,
            city: this.props.data.u2City,
            state: this.props.data.u2State,
            zip: this.props.data.u2Zip,
        }

        const tradeItemOne = {
            coverUrl:this.props.data.r1CoverUrl,
            name:this.props.data.r1Name,
            artist:this.props.data.r1Artist,
            year:this.props.data.r1Year,
            genre:this.props.data.r1Genre,
        }

        const tradeItemTwo = {
            coverUrl:this.props.data.r2CoverUrl,
            name:this.props.data.r2Name,
            artist:this.props.data.r2Artist,
            year:this.props.data.r2Year,
            genre:this.props.data.r2Genre,
        }
        
        const tradeInfo = {
            user1Address,
            user2Address,
            sendOffDate:this.props.data.dateStarted,
            returnDate:this.props.data.dateEnded,
        }

        return(
            <div>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="trade-header">
                            <span>Trade With {this.props.data.userName}</span>
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