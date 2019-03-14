import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../pages/userHome.css';

class HomeCollection extends Component{
    constructor(){
        super()
        this.state = {
            records:[],
        }
    }

    componentWillReceiveProps(newProps){
        // console.log(newProps);
        this.setState({
            records:newProps.data,
        })
    }

    render(){
        let collection;
        if(this.state.records.length > 0){
            collection = this.state.records.map((album,i)=>{
                return(
                    <div key={i}>
                        <img src={album.coverUrl} alt="" className="mini-album-cover"/> {album.name} by {album.artist}
                    </div>
                )
            })
        }
        else{
            collection=<div></div>;
        }

        return(
            <div className="dashboard-item row">
                <div className="col s12 m4">
                    <span className="dashboard-item-label" id="collection">Collection</span>
                </div>
                <div className="dashboard-item-content col s12">
                    <div className="row">
                        <div className="col s12 m3">
                            <div className="dashboard-item-detail-label">Recent Additions:</div>
                        </div>
                        <div className="dashboard-item-details col s12 m9">
                            <div>{collection}</div>
                        </div>
                    </div>
                    <div className="row">
                    <span className="col s9"></span>
                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><Link to="/users/collection">Collection</Link></span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        coll: state.coll
    }
}

export default connect(mapStateToProps)(HomeCollection);