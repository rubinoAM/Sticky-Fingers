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
            records: [],
            footer: '',
        }
    }

    componentDidMount(){
        this.props.collectionAction();

        this.setState({
            footer:window.document.getElementById('footer'),
        })
    }

    componentWillUnmount(){
        let footer = this.state.footer;
        footer.style.width = "auto";
        footer.style.position = "static";
        footer.style.bottom = "initial";
    }

    render(){
        //console.log(this.props);
        let recordsArray = this.props.records.map((record,i)=>{
            //console.log(record);
            return(
                <RecordCard data={record} key={i} />
            )
        })

        if (this.state.footer) {
            let footer = this.state.footer;
            window.addEventListener("resize",()=>{
                if(this.state.records.length < 5 && this.state.records.length > 2){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1200 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.bottom = "0";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                } if (this.state.records.length < 3){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1645 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.bottom = "0";
                    } else if(window.innerHeight >= 978 && window.innerWidth <= 992 && window.innerWidth >= 601){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.bottom = "0";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                }
            })
        }

        return(
            <div className="collection-container">
                <div className="collection-header">
                    <h1>COLLECTION</h1>
                </div>
                <div className="collection-body">
                    <div className="row">
                        {recordsArray}
                    </div>
                </div>
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
