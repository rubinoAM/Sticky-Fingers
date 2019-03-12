import React, { Component } from 'react';
import axios from 'axios';
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
            tradeRecords: [],
            recipient:'',
            recipRecSelected: 'false',
            recipientRec:'',
            yourRec: '',
            yourRecSelected:'false',
        }
    }

    pickFriend = (e)=>{
        e.preventDefault();
        //console.dir(e.target);
        //console.log(e.target[0].value);
        let friendIndex = e.target[0].value;

        const friendName = this.props.friends[friendIndex].userName;
        axios({
            url: `${window.apiHost}/users/makeTrade/pickFriend`,
            method: 'POST',
            data: friendName,
        }).then((response)=>{
            console.log(response);
            this.setState({
                tradeRecords:response.data,
                recipient:response.data[0].userId,
            })
        });
    }

    pickFriendRecord = (e)=>{
        e.preventDefault();
        //console.dir(e.target);
        //console.log(e.target.parentElement[0])
        let recipientRecSrc = document.getElementById('recipientRecCover').src;
        let recordName;

        for(let i=0;i<e.target.parentElement[0].length;i++){
            //console.log(e.target.parentElement[0][i].value);
            //console.log(recipientRecSrc);
            if(e.target.parentElement[0][i].value === recipientRecSrc){
                //console.log(e.target.parentElement[0][i].text);
                recordName = e.target.parentElement[0][i].text;
                i = e.target.parentElement[0].length;
            }
        }

        axios({
            url: `${window.apiHost}/users/makeTrade/pickFriendRecord`,
            method: 'POST',
            data: recordName,
        }).then((response)=>{
            console.log(response);
            this.setState({
                recipRecSelected: 'true',
                recipientRec:response.data,
            })
        });
    }

    showAvatar = (e)=>{
        e.preventDefault();
        //console.dir(e.target);
        let recipientAvatar = document.getElementById('recipientAvatar');
        recipientAvatar.src = `${window.apiHost}/images/${this.props.friends[e.target.value].avatarUrl}`;
    }

    showCover = (e)=>{
        e.preventDefault();
        //console.dir(e.target);
        let recipientCover = document.getElementById('recipientRecCover');
        recipientCover.src = `${e.target.value}`;
    }

    yourCover = (e)=>{
        e.preventDefault();
        let yourRecCover = document.getElementById('yourRecCover');
        yourRecCover.src = `${e.target.value}`;
    }

    pickYourRec = (e)=>{
        e.preventDefault();
        //console.dir(e.target);
        let yourRecSrc = document.getElementById('yourRecCover').src;
        let recordName;

        for(let i=0;i<e.target.parentElement[0].length;i++){
            //console.log(e.target.parentElement[0][i].value);
            //console.log(yourRecSrc);
            if(e.target.parentElement[0][i].value === yourRecSrc){
                //console.log(e.target.parentElement[0][i].text);
                recordName = e.target.parentElement[0][i].text;
                i = e.target.parentElement[0].length;
            }
        }

        axios({
            url: `${window.apiHost}/users/makeTrade/pickYourRecord`,
            method: 'POST',
            data: recordName,
        }).then((response)=>{
            //console.log(response);
            this.setState({
                yourRecSelected: 'true',
                yourRec:response.data,
            })
        });
    }

    submitTrade = (e)=>{
        e.preventDefault();
        //console.dir(e.target)
        const startDate = e.target[0].value;
        const finishDate = e.target[1].value;
        const recipientId = this.state.recipient;
        const recipRec = this.state.recipientRec;
        const yourRec = this.state.yourRec;
        const yourUserName = this.props.userName;

        if(this.state.recipRecSelected === 'true' && this.state.yourRecSelected === 'true'){
            console.log(startDate,finishDate,recipientId,recipRec,yourRec,yourUserName);
        }
    }

    render(){
        console.log(this.props);
        return(
            <div className="make-trade-page">
                <div className="make-trade-header">
                    <h1>Make Trade</h1>
                    <span>Pick a person you wish to trade with and then pick a record you want them to trade. Then select a record you wish to trade to them.</span>
                </div>
                <div className="make-trade-body">
                    <TradeRecipient pickFriend={this.pickFriend} pickFriendRecord={this.pickFriendRecord} tradeRecords={this.state.tradeRecords} showAvatar={this.showAvatar} showCover={this.showCover}/>
                    <TradeUser coll={this.props.coll} yourCover={this.yourCover} pickYourRec={this.pickYourRec} />
                    <center className="row">
                        <form className="finalize-trade" id="finalizeTrade" onSubmit={this.submitTrade}>
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
        friends: state.friends,
        auth: state.auth,
        coll:state.coll,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        makeTradeAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(MakeTrade);