import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import collectionAction from '../../actions/collectionAction';
import RecordDetails from '../utility/RecordDetails';
import './record.css';

class Record extends Component{
    componentDidMount(){
        let footer = window.document.getElementById('footer');
        footer.style.width = "auto";
        footer.style.position = "static";
        footer.style.bottom = "initial";
    }

    render(){
        const recordId = this.props.match.params.id;
        const recordSearch = this.props.records.find((record)=>{
            return(record.rid == recordId)
        })

        console.log(this.props);

        return(
            <div className="indv-rec-holder">
                <RecordDetails data={recordSearch}/>
                <Link to="/users/collection"><button className="btn">Back to Collection</button></Link>
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