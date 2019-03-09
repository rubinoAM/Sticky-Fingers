import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import collectionAction from '../../actions/collectionAction';
import '../pages/userHome.css';



class HomeCollection extends Component{
    constructor(){
        super()
    }

    // componentDidMount(){
    //     this.props.collectionAction();
    // }

    render(){
        // console.log(this.props.coll[0].name)
        // console.log(this.props)
        if(this.props.coll.length === 0){
            return (<h1>Loading...</h1>)
        }else{
            const collection = this.props.coll.map((album,i)=>{
                return(
                    <div key={i}>
                        <span >{album.name}</span>
                    </div>
                )
            })
            const recordCount = collection.length;
            let userRank = "";
            if(recordCount > 0 && recordCount < 11){
                userRank = "Garage Band"
            }else if(recordCount > 10 && recordCount < 21){
                userRank = "Opening Act"
            }else{
                userRank = "Grammy Winner"
            }

            return(
                <div className="dashboard-item row">
                    <div className="col s12 m3">
                        <span className="dashboard-item-label" id="collection">Collection</span>
                        <span className="dashboard-subinfo">
                            <span>Name</span>
                            <span>Started</span>
                        </span>
                    </div>
                    <div className="dashboard-item-content col s12 m9 ">
                        <div className="row">
                            <span className="dashboard-item-details col s12">
                                <span>Grab a Record!
                                    <span>{collection}</span>
                                    <span>{userRank}</span>
                                </span>
                            </span>
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
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        coll: state.coll
    }
}

// function mapDispatchToProps(dispatcher){
//     return bindActionCreators({
//         collectionAction
//     },dispatcher)
// }

export default connect(mapStateToProps)(HomeCollection);



