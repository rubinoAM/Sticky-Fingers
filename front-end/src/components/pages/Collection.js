import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Collection extends Component{
    constructor(){
        super()
        this.state = {
            records: []
        }
    }

    componentDidMount(){
        const recordsResponse = axios.get(`${window.apiHost}/collection`);
        recordsResponse.then((response)=>{
            const records = response.data;
            this.setState({
                records
            })
        })
    }

    render(){
        const recordsArray = this.state.records.map((record,i)=>{
            return(
                <tr key={record.id}>
                    <td><Link to="">{record.name}</Link></td>
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

export default Collection;
