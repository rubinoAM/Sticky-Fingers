import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import communityAction from '../../actions/communityAction';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PersonCard from '../utility/PersonCard';
import './friends.css';

class Community extends Component{
    constructor(){
        super()

    }

    componentDidMount(){ 
        // this.props.communityAction();
        console.log(this.props.community)

    }


    render(){
        console.log(this.props)

        return(
            <div className="">
                <PersonCard />
                Community
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        community: state.community,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        communityAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Community);