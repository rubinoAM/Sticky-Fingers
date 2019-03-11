import React, { Component } from 'react';

class TradeUser extends Component{
    render(){
        let yourRec;
        let yourRecSelected = true;

        if(!yourRecSelected){  
            yourRec = <div className="row">
                                <div className="col s12 l4">
                                    <img src="https://via.placeholder.com/200" alt="" className="your-rec-cover"/>
                                </div>
                                <form className="col s12 l8" id="yourRecSelect">
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
            yourRec = <div className="row filled">
                                <div className="col s12 l4">
                                    <img src="https://via.placeholder.com/200" alt="" className="your-rec-cover"/>
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

export default TradeUser;