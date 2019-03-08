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


    componentDidMount(){
        this.props.collectionAction();
    }

    // componentWillUpdate(nextProps, nextState){
    //     this.props.collectionAction();
    //     console.log(this.nextProps)
    // }



    // componentWillReceiveProps(newProps){
    //     if(newProps.cart.length !== this.props.cart.length){
    //         this.props.history.push('/?added=item');
    //     }
    // }


    render(){
        console.log(this.props.coll[0])
        if(!this.props.coll){
            return (<h1>Loading...</h1>)
        }

            return(
                <div className="dashboard-item row">
                    <div className="col s12 m3">
                        <span className="dashboard-item-label" id="collection">Collection</span>
                        <span className="dashboard-subinfo">Your record collection name, date created</span>
                    </div>
                    <div className="dashboard-item-content col s12 m9 ">
                        <div className="row">
                            <span className="dashboard-item-details col s12">{this.props.coll[0].id}</span>
                        </div>
                        <div className="row">
                        <span className="col s9"></span>
                            <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><a href="#">Collection</a></span>
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

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        collectionAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeCollection);



