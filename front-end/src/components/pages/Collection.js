import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import collectionAction from '../../actions/collectionAction';

class Collection extends Component{
    constructor(){
        super()
        this.state = {
            records: []
        }
    }

    componentDidMount(){
        
        this.props.collectionAction();
    }

    render(){
        console.log(this.props)
        
        const recordsArray = this.props.records.map((record,i)=>{
            console.log(record)
            return(
                <tr key={record.rid}>
                    <td><Link to={`/collection/record/${record.rid}`}>{record.name}</Link></td>
                    <td>{record.artist}</td>
                    <td>{record.year}</td>
                    <td># of Tracks</td>
                    <td>{record.genre}</td>
                    <td>{record.label}</td>
                    <td>Date Loaned</td>
                </tr>
            )

        })
        return(
            
            
            <div>
                Your Record Collection
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
                        {recordsArray}
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

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        collectionAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Collection);
