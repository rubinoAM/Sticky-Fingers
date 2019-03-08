import React, { Component } from 'react';

class Trade extends Component{
    render(){
        return(
            <div className="col s12 m6">
                <div className="row">
                    <div className="col s12">
                        <div className="trade-container">
                            <div className="row">
                                <img className="col s12 l4" src="https://via.placeholder.com/300" alt="" />
                                <div className="col s12 l8">
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">TITLE:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-title">[TITLE]</div>
                                    </div>
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">ARTIST:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-artist">ARTIST</div>
                                    </div>
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">YEAR:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-year">YEAR</div>
                                    </div>
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">GENRE:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-genre">GENRE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trade;