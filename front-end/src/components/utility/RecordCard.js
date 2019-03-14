import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecordCard extends Component{
    constructor(){
        super()
        
    }

    render(){
        //console.log(this.props);
        return(
            <div key={this.props.data.rid} className="col s12 m6 l3">
                <div className="card record-card">
                    <div className="card-image">
                    <Link to={`/users/record/${this.props.data.rid}`}><img className="record-img" src={this.props.data.coverUrl} alt="" /></Link>
                    </div>
                    <div className="card-content">
                        <Link to={`/users/record/${this.props.data.rid}`} className="record-name">{this.props.data.name}</Link>
                        <div className="row record-details">
                            <div className="col s12">
                                <div className="field-row">
                                    <span>Artist: </span>
                                    <span>{this.props.data.artist}</span>
                                </div>
                                <div className="field-row">
                                    <span>Year: </span>
                                    <span className="field-data">{this.props.data.year}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        coll: state.coll
    }
}

export default connect(mapStateToProps)(RecordCard);