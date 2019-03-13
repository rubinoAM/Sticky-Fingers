import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import tradesAction from '../../actions/tradesAction';
import '../pages/userHome.css';

class HomeTrades extends Component{
    componentDidMount(){
        this.props.tradesAction(this.props.trades,this.props.auth)
    }

    render(){
        //console.log(this.props);
        const tradesList = this.props.trades.map((trade,i)=>{
            return(
                <div key={i}>
                    <span>{trade.r1Name} for {trade.r2Name}</span>
                    <div>With {trade.userName}</div>
                </div>
            )
        })
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

function mapStateToProps(state){
    return{
        auth: state.auth,
        trades: state.trades,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        tradesAction: tradesAction,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeTrades);