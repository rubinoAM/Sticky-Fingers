import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import collectionAction from '../../actions/collectionAction';

class Record extends Component{
    constructor(){
        super()

    }

    // getRecord = ()=>{
    //     const recordId = this.props.record.rid;
    //     console.log(recordId)
    //     this.props.collectionAction(recordId)
        
    // }


    render(){
        
        // console.log(this.props)
        const recordId = this.props.match.params.id;
        const recordSearch = this.props.records.find((record)=>{
            console.log(record.rid,recordId)
            return(record.rid == recordId)
        })
        console.log(recordSearch)


        return(
            
            <div>
                Your Individual Record
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Record</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th>Tracks</th>
                            <th>Genre</th>
                            <th>Label</th>
                            <th>On Loan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{recordSearch.name}</td>
                            <td>{recordSearch.artist}</td>
                            <td>{recordSearch.year}</td>
                            <td># of Tracks</td>
                            <td>{recordSearch.genre}</td>
                            <td>{recordSearch.label}</td>
                            <td>Date Loaned</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return{
        records: state.coll
    }
}


// bring in the collectionReducer here
// get the id out of the url
// use it to find the record i want in the reducer


export default connect(mapStateToProps)(Record);

// if the component needs to update state then you map dispatch to props
// map state is just for knowing props, receiving, not sending out
