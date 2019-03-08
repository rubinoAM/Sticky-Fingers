import React, { Component } from 'react';
import './trades.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import tradesAction from '../../actions/tradesAction';
import Trade from './Trade';

class Trades extends Component{
    constructor(){
        super()
        this.state = {
            trades:[],
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="trades-page">
                <div className="trades-header">
                    <h1>TRADES</h1>
                    <span>Here are all of the trades currently associated with your account.</span>
                </div>
                <div className="trades-body">
                    <Trade />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        trades:state.trades,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        tradesAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Trades);