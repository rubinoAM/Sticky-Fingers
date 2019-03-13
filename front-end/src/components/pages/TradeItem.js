import React, { Component } from 'react';

class Trade extends Component{
    render(){
        //console.log(this.props);
        return(
            <div className="col s12 m6">
                <div className="row">
                    <div className="col s12">
                        <div className="trade-container">
                            <div className="row trade-contents">
                                <img className="col s12 l4" src={this.props.data.coverUrl} alt="" />
                                <div className="col s12 l8">
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">TITLE:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-title">{this.props.data.name}</div>
                                    </div>
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">ARTIST:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-artist">{this.props.data.artist}</div>
                                    </div>
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">YEAR:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-year">{this.props.data.year}</div>
                                    </div>
                                    <div className="row trade-rec-row">
                                        <div className="col s12 l6 trade-rec-detail">GENRE:</div>
                                        <div className="col s12 l6 trade-rec-detail" id="trade-rec-genre">{this.props.data.genre}</div>
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