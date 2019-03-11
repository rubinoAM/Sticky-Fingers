import React, { Component } from 'react';
import './maketrade.css';
import TradeUser from '../utility/TradeUser';
import TradeRecipient from '../utility/TradeRecipient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import makeTradeAction from '../../actions/makeTradeAction';

class MakeTrade extends Component{
    constructor(){
        super()
        this.state = {
            makeTrade:'',
        }
    }

    render(){
        return(
            <div className="make-trade-page">
                <div className="make-trade-header">
                    <h1>Make Trade</h1>
                    <span>Pick a person you wish to trade with and then pick a record you want them to trade. Then select a record you wish to trade to them.</span>
                </div>
                <div className="make-trade-body">
                    <TradeRecipient />
                    <TradeUser />
                    <center className="row">
                        <form className="finalize-trade" id="finalizeTrade">
                            <div>
                                <input className='validate' type="date" id="startDate" name="startDate"/>
                                <label htmlFor='startDate'>Pick Your Send Off Date</label>
                                <input className='validate' type="date" id="returnDate" name="returnDate" />
                                <label htmlFor='username'>Pick Your Return Date</label>
                            </div>
                            <button className="btn make-trade-btn col s8 offset-s2 m4 offset-m4">Submit</button>
                        </form>
                    </center>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        makeTrade: state.makeTrade,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        makeTradeAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(MakeTrade);