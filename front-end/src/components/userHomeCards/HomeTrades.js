import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import tradesAction from '../../actions/tradesAction';
import '../pages/userHome.css';

class HomeTrades extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.tradesAction();
    }

    render(){
        
        if(this.props.trades.length === 0){
            return (<h1>Loading...</h1>)
        }else{
            const tradesList = this.props.trades.map((trade,i)=>{
                return(
                    <div key={i}>
                        <span >{trade.id}</span>
                    </div>
                )
            })
            return(
                <div className="dashboard-item row">
                    <div className="col s12 m3">
                        <span className="dashboard-item-label" id="trades">Trades</span>
                        <span className="dashboard-subinfo"> sub info sub info sub info sub info sub info sub info</span>
                    </div>
                    
                    <div className="dashboard-item-content col s12 m9 ">
                        <div className="row">
                            <span className="dashboard-item-details col s12"> {tradesList}</span>
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
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        trades: state.trades
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        tradesAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeTrades);