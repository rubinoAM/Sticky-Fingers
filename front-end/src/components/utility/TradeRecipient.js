import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import makeTradeAction from '../../actions/makeTradeAction';

class TradeRecipient extends Component{
    constructor(){
        super()
        this.state = {
            recipient:'',
            tradeRecords: [],
            recipRecSelected: 'false',
            recipientRec:'',
        }
    }

    render(){
        //console.log(this.props);
        let defAvatar = `${window.apiHost}/images/placeholder.png`;
        let recipientRecord;
        let friendsArray = this.props.friends.map((friend,i)=>{
            return <option value={i} key={i}>{friend.userName}</option>
        });

        if(this.props.tradeRecords.length === 0){
            recipientRecord = <div className="trade-recipient-record greyed">
                                <div className="row">
                                    <div className="col s12 l4">
                                        <img src={defAvatar} alt="" className="recipient-rec-cover"/>
                                    </div>
                                    <div className="col s12 l8">
                                        <h4>You must pick a user before you can pick a record.</h4>
                                    </div>
                                </div>
                            </div>;
        } else {
            let friendRecordsArray = this.props.tradeRecords.map((record,i)=>{
                return <option value={record.coverUrl} key={i}>{record.name}</option>
            })

            recipientRecord = <div className="trade-recipient-record">
                                <div className="row">
                                    <div className="col s12 l4">
                                        <img src={defAvatar} alt="" id="recipientRecCover" className="recipient-rec-cover"/>
                                    </div>
                                    <form className="col s12 l8" id="recipientRecSelect">
                                        <h4>Pick a Record To Trade For</h4>
                                        <select onChange={this.props.showCover} className="record-select">
                                            {friendRecordsArray}
                                        </select>
                                        <button onClick={this.props.pickFriendRecord} className="btn make-trade-btn">Select</button>
                                    </form>
                                </div>
                            </div>;
            
        }

        let recipient = <div className="row">
                            <div className="col s12 l4">
                                <img src={defAvatar} alt="" id="recipientAvatar" className="recipient-avatar" />
                            </div>
                            <form className="col s12 l8" id="recipientSelect" onSubmit={this.props.pickFriend} >
                                <h4>Pick a User</h4>
                                <select onChange={this.props.showAvatar}className="user-select">
                                    {friendsArray}
                                </select>
                                <button className="btn make-trade-btn">Select</button>
                            </form>
                        </div>

        return(
            <div className="row">
                <h3>Recipient</h3>
                <div className="col s12 m6">
                    <div className="trade-recipient">
                        {recipient}
                    </div>
                </div>
                <div className="col s12 m6">
                    {recipientRecord}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        friends: state.friends,
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        makeTradeAction
    }, dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(TradeRecipient);