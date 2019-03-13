import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import makeTradeAction from '../../actions/makeTradeAction';

class TradeUser extends Component{
    constructor(){
        super()
        this.state = {
            yourRec: '',
            yourRecSelected:'false',
        }
    } 

    render(){
        let defAvatar = `${window.apiHost}/images/placeholder.png`;

        let yourRecArr = this.props.coll.map((record,i)=>{
            return <option key={i} value={record.coverUrl}>{record.name}</option>
        })

        let yourRec = <div className="row">
                        <div className="col s12 l4">
                            <img src={defAvatar} alt="" id="yourRecCover" className="your-rec-cover"/>
                        </div>
                        <form className="col s12 l8" id="yourRecSelect">
                            <h4>Pick a Record To Trade</h4>
                            <select onChange={this.props.yourCover} className="record-select">
                                {yourRecArr}
                            </select>
                            <button onClick={this.props.pickYourRec} className="btn make-trade-btn">Select</button>
                        </form>
                    </div>

        return(
            <div className="row">
                <h3>Your Record</h3>
                <div className="col s12 m8 offset-m2">
                    <div className="trade-your-record">
                        {yourRec}
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        //coll:state.coll,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        makeTradeAction
    }, dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(TradeUser);