import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import collectionAction from '../../actions/collectionAction';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Record from './Record';
import RecordCard from '../utility/RecordCard';

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
            return(
                <RecordCard data={record} key={i}/>
            )
        })
        return(
            <div>
                Your Record Collection
                    {recordsArray}
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
