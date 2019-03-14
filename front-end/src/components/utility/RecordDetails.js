import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecordDetails extends Component{
    constructor(){
        super()
    }

    render(){
        //console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <img src={this.props.data.coverUrl} alt="" className="indv-cover"/>
                    </div>
                    <div className="col s12">
                        <div className="indv-details">
                            <p>Name: {this.props.data.name}</p>
                            <p>Artist: {this.props.data.artist}</p>
                            <p>Year: {this.props.data.year}</p>
                            <p>Genre: {this.props.data.genre}</p>
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

export default connect(mapStateToProps)(RecordDetails);
