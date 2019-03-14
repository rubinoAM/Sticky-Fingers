import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/userHome.css';

class HomeTrades extends Component{
    constructor(){
        super()
        this.state = {
            trades:[],
        }
    }

    componentWillReceiveProps(newProps){
        //console.log(newProps);
        this.setState({
            trades:newProps.data,
        })
    }

    render(){
        // console.log(this.props);
        let tradesList;
        if(this.state.trades.length === 0){
            tradesList = <span>No Trades Currently</span>
        } else {
            tradesList = this.state.trades.map((trade,i)=>{
                return(
                    <div key={i}>
                        <span>{trade.r1Name} for {trade.r2Name}</span>
                        <div>With {trade.userName}</div>
                    </div>
                )
            })
        }

        return(
            <div className="dashboard-item row">
                <div className="col s12 m4">
                    <span className="dashboard-item-label" id="trades">Trades</span>
                </div>
                <div className="dashboard-item-content col s12">
                    <div className="row">
                        <div className="col s12 m3">
                            <div className="dashboard-item-detail-label">Newest Trades:</div>   
                        </div>
                        <div className="dashboard-item-details col s12 m9">{tradesList}</div>
                    </div>
                    <div className="row">
                    <span className="col s9"></span>
                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><Link to="/users/trades">Trades</Link></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeTrades;