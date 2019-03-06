import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecordCard extends Component{
    constructor(){
        super()

    }

    render(){
        return(
            <div className="col s3 game-card" >
            <Link to={`/record/${this.props.data.rid}`}>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt=""/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{this.props.data.name}<i className="material-icons right">more_vert</i></span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                        <p>Summary</p>
                    </div>
                </div>
            </Link>
          </div>   
        )
    }
}

function mapStateToProps(state){
    return{
        records: state.coll
    }
}

export default connect(mapStateToProps)(RecordCard);