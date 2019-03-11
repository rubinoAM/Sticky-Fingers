import React, { Component } from 'react';

class TradeRecipient extends Component{
    render(){
        let recipSelected = false;
        let recipRecSelected = false;
        let recipient;
        let recipientRec;

        if(!recipSelected){
            recipient = <div className="row">
                            <div className="col s12 l4">
                                <img src="https://via.placeholder.com/200" alt="" className="recipient-avatar" />
                            </div>
                            <form className="col s12 l8" id="recipientSelect">
                                <h4>Pick a User</h4>
                                <select className="user-select">
                                    <option>User 1</option>
                                    <option>User 2</option>
                                    <option>User 3</option>
                                </select>
                                <button className="btn make-trade-btn">Select</button>
                            </form>
                        </div>
        } else {
            recipient = <div className="row filled">
                            <div className="col s12 l4">
                                <img src="https://via.placeholder.com/200" alt="" className="recipient-avatar" />
                            </div>
                            <div className="col s12 l8">
                                <h4>USERNAME</h4>
                                <div>DETAIL</div>
                                <div>DETAIL</div>
                            </div>
                        </div>
        }
        if(!recipRecSelected){  
            recipientRec = <div className="row">
                                <div className="col s12 l4">
                                    <img src="https://via.placeholder.com/200" alt="" className="recipient-rec-cover"/>
                                </div>
                                <form className="col s12 l8" id="recipientRecSelect">
                                    <h4>Pick a Record To Trade For</h4>
                                    <select className="record-select">
                                        <option>Record 1</option>
                                        <option>Record 2</option>
                                        <option>Record 3</option>
                                    </select>
                                    <button className="btn make-trade-btn">Select</button>
                                </form>
                            </div>
        } else {
            recipientRec = <div className="row filled">
                                <div className="col s12 l4">
                                    <img src="https://via.placeholder.com/200" alt="" className="recipient-rec-cover"/>
                                </div>
                                <div className="col s12 l8">
                                    <h4>RECORD TITLE</h4>
                                    <div>ARTIST</div>
                                    <div>AVAILABILITY</div>
                                </div>
                            </div>
        }

        return(
            <div className="row">
                <h3>Recipient</h3>
                <div className="col s12 m6">
                    <div className="trade-recipient">
                        {recipient}
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="trade-recipient-record">
                        {recipientRec}
                    </div>
                </div>
            </div>
        )
    }
}

export default TradeRecipient;