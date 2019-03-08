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
                        <Trade />
                        <div className="col s12 hide-on-med-and-up trade-label">THEIR RECORD:</div>
                        <Trade />
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
                    </div>
                    <hr/>
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