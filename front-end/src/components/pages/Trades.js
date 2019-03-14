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
        this.props.tradesAction(this.props.trades,this.props.auth);
    }

    render(){
        //console.log(this.props);
        let trades = this.props.trades.map((trade,i)=>{
            return <Trade key={i} data={trade} />
        })

        return(
            <div className="trades-page">
                <div className="trades-header">
                    <h1>TRADES</h1>
                    <span>Here are all of the trades currently associated with your account.</span>
                </div>
                <div className="trades-body">
                    {trades}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        trades:state.trades,
        auth:state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        tradesAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Trades);