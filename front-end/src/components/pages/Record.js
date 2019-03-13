import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        const recordSearch = this.props.coll.find((record)=>{
            return(record.rid == recordId)
        })

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
        coll: state.coll
    }
}

export default connect(mapStateToProps)(Record);