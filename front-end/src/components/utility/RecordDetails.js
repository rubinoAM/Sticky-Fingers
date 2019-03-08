import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecordDetails extends Component{
    constructor(){
        super()

    }

    render(){

        return(
            <div>
                <p>Name: {this.props.data.name}</p>
                <p>Artist: {this.props.data.artist}</p>
                <p>Year: {this.props.data.year}</p>
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
